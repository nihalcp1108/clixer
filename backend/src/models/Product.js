import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true
    },
    model: {
      type: String,
      required: [true, 'Product model is required'],
      trim: true
    },
    image: {
      type: String,
      required: [true, 'Product image is required'],
      trim: true
    },
    imagePublicId: {
      type: String,
      trim: true
    },
    availableSizes: {
      type: [String],
      default: []
    },
    code: {
      type: String,
      trim: true
    },
    variant: {
      type: String,
      trim: true
    },
    series: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      default: 'other-products',
      trim: true
    },
    categoryLabel: {
      type: String,
      trim: true
    },
    material: {
      type: String,
      default: 'AISI 304 Stainless Steel'
    },
    badge: {
      type: String,
      trim: true
    },
    colorsImage: {
      type: String
    },
    finishes: {
      type: [String],
      default: []
    },
    sizes: {
      type: [String],
      default: []
    },
    sizeShort: {
      type: String
    },
    startingPrice: {
      type: String
    },
    customId: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

productSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    if (!ret.id) ret.id = ret.customId || (ret._id ? ret._id.toString() : '');
    if (!ret.code && ret.model) ret.code = ret.model;
    return ret;
  }
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
