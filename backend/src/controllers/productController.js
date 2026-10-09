import Product from '../models/Product.js';
import { uploadImage, deleteImage } from '../middleware/upload.js';

// Helper to normalize availableSizes from array or JSON string
const parseSizes = (sizes) => {
  if (!sizes) return [];
  if (Array.isArray(sizes)) return sizes.filter(s => typeof s === 'string' && s.trim());
  if (typeof sizes === 'string') {
    try {
      const parsed = JSON.parse(sizes);
      if (Array.isArray(parsed)) return parsed.filter(s => typeof s === 'string' && s.trim());
    } catch {
      return sizes.split(',').map(s => s.trim()).filter(Boolean);
    }
  }
  return [];
};

/**
 * Public: Get all products catalogue
 */
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      products
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch products catalogue.'
    });
  }
};

/**
 * Public/Protected: Get single product by ID or customId/model
 */
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    let product = null;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(id);
    }

    if (!product) {
      product = await Product.findOne({
        $or: [
          { customId: id },
          { model: id },
          { code: id }
        ]
      });
    }

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found.'
      });
    }

    return res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    console.error('Error fetching product by id:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch product.'
    });
  }
};

/**
 * Protected: Create a new product
 */
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      model,
      code,
      category,
      categoryLabel,
      material,
      variant,
      series,
      availableSizes,
      image: bodyImageUrl
    } = req.body;

    // 1. Validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Product name is required.'
      });
    }

    const cleanModel = (model || code || '').trim();
    if (!cleanModel) {
      return res.status(400).json({
        success: false,
        message: 'Product model is required.'
      });
    }

    // 2. Handle image upload or image URL
    let imageUrl = bodyImageUrl?.trim();
    let imagePublicId = null;

    if (req.file) {
      const uploadResult = await uploadImage(req.file);
      if (uploadResult) {
        imageUrl = uploadResult.url;
        imagePublicId = uploadResult.publicId;
      }
    }

    if (!imageUrl) {
      return res.status(400).json({
        success: false,
        message: 'Product image is required.'
      });
    }

    // 3. Process available sizes
    const parsedSizes = parseSizes(availableSizes);

    // 4. Create in MongoDB
    const newProduct = new Product({
      name: name.trim(),
      model: cleanModel,
      code: cleanModel,
      image: imageUrl,
      imagePublicId,
      availableSizes: parsedSizes,
      sizes: parsedSizes,
      category: category?.trim() || 'channel-drainers',
      categoryLabel: categoryLabel?.trim() || (category === 'channel-drainers' ? 'Channel Drainer' : 'Square Drainer'),
      material: material?.trim() || 'AISI 304 Stainless Steel',
      variant: variant?.trim(),
      series: series?.trim() || cleanModel
    });

    const savedProduct = await newProduct.save();

    return res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product: savedProduct
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to create product. Please try again.'
    });
  }
};

/**
 * Protected: Update an existing product
 */
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      model,
      code,
      category,
      categoryLabel,
      material,
      variant,
      series,
      availableSizes,
      image: bodyImageUrl
    } = req.body;

    let product = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(id);
    }
    if (!product) {
      product = await Product.findOne({
        $or: [{ customId: id }, { model: id }, { code: id }]
      });
    }

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found for updating.'
      });
    }

    // 1. Update basic fields if provided
    if (name && name.trim()) product.name = name.trim();
    if (model || code) {
      const cleanModel = (model || code).trim();
      product.model = cleanModel;
      product.code = cleanModel;
    }
    if (category) product.category = category.trim();
    if (categoryLabel) product.categoryLabel = categoryLabel.trim();
    if (material) product.material = material.trim();
    if (variant !== undefined) product.variant = variant ? variant.trim() : '';
    if (series !== undefined) product.series = series ? series.trim() : '';

    // 2. Handle image replacement
    if (req.file) {
      const uploadResult = await uploadImage(req.file);
      if (uploadResult) {
        // Clean up old image if different
        await deleteImage(product.imagePublicId, product.image);
        product.image = uploadResult.url;
        product.imagePublicId = uploadResult.publicId;
      }
    } else if (bodyImageUrl && bodyImageUrl.trim() && bodyImageUrl !== product.image) {
      product.image = bodyImageUrl.trim();
    }

    // 3. Handle available sizes
    if (availableSizes !== undefined) {
      const parsedSizes = parseSizes(availableSizes);
      product.availableSizes = parsedSizes;
      product.sizes = parsedSizes;
    }

    const updatedProduct = await product.save();

    return res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      product: updatedProduct
    });
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update product.'
    });
  }
};

/**
 * Protected: Delete a product
 */
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let product = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(id);
    }
    if (!product) {
      product = await Product.findOne({
        $or: [{ customId: id }, { model: id }, { code: id }]
      });
    }

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found for deletion.'
      });
    }

    // Clean up image if hosted
    await deleteImage(product.imagePublicId, product.image);

    await Product.deleteOne({ _id: product._id });

    return res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      deletedId: id
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete product.'
    });
  }
};
