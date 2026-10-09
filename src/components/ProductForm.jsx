import React, { useState, useEffect } from 'react';
import { Upload, X, Plus, AlertCircle, Image as ImageIcon, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFullImageUrl } from '../services/api';

const SIZE_PRESETS = [
  { label: 'Channel Drainer (5 Sizes)', sizes: ['105 × 300 mm', '105 × 450 mm', '105 × 600 mm', '105 × 750 mm', '105 × 900 mm'] },
  { label: 'Square Drain / Tile Insert (2 Sizes)', sizes: ['125 × 125 mm', '150 × 150 mm'] }
];

export default function ProductForm({
  initialData = null,
  onSubmit,
  loading = false,
  isEdit = false
}) {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [category, setCategory] = useState('channel-drainers');
  const [material, setMaterial] = useState('AISI 304 Stainless Steel');
  const [availableSizes, setAvailableSizes] = useState([]);
  const [newSizeInput, setNewSizeInput] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setModel(initialData.model || initialData.code || '');
      setCategory(initialData.category || 'channel-drainers');
      setMaterial(initialData.material || 'AISI 304 Stainless Steel');
      setAvailableSizes(initialData.availableSizes ? [...initialData.availableSizes] : []);
      setImagePreview(initialData.image || '');
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate mime type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setFormError('Invalid file type. Please upload a JPG, JPEG, PNG, or WebP image.');
      return;
    }

    // Validate file size (max 5 MB)
    if (file.size > 5 * 1024 * 1024) {
      setFormError('File size exceeds 5MB limit. Please upload a smaller image.');
      return;
    }

    setFormError('');
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleAddSize = (e) => {
    e?.preventDefault();
    const trimmed = newSizeInput.trim();
    if (!trimmed) return;
    if (availableSizes.includes(trimmed)) {
      setFormError('This size is already in the list.');
      return;
    }
    setFormError('');
    setAvailableSizes([...availableSizes, trimmed]);
    setNewSizeInput('');
  };

  const handleRemoveSize = (indexToRemove) => {
    setAvailableSizes(availableSizes.filter((_, idx) => idx !== indexToRemove));
  };

  const handleApplyPreset = (sizes) => {
    setAvailableSizes([...sizes]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter a Product Name.');
      return;
    }

    if (!model.trim()) {
      setFormError('Please enter a Product Model (e.g. CLX 8002, CLX 801).');
      return;
    }

    if (!isEdit && !imageFile && !imagePreview) {
      setFormError('Please upload an image for this product.');
      return;
    }

    // Build FormData payload
    const formData = new FormData();
    formData.append('name', name.trim());
    formData.append('model', model.trim());
    formData.append('code', model.trim());
    formData.append('category', category);
    formData.append('material', material);
    formData.append('availableSizes', JSON.stringify(availableSizes));

    if (imageFile) {
      formData.append('image', imageFile);
    } else if (imagePreview && !imagePreview.startsWith('blob:')) {
      formData.append('image', imagePreview);
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="admin-product-form" noValidate>
      {formError && (
        <div className="admin-alert-danger" role="alert">
          <AlertCircle size={18} className="admin-alert-icon" />
          <span>{formError}</span>
        </div>
      )}

      <div className="admin-form-grid">
        {/* Left Column: Basic Information */}
        <div className="admin-form-col">
          <div className="admin-card-section">
            <h3 className="admin-section-heading">Product Details</h3>

            <div className="admin-form-group">
              <label htmlFor="product-name" className="admin-form-label">
                Product Name <span className="admin-required">*</span>
              </label>
              <input
                id="product-name"
                type="text"
                required
                placeholder="e.g. Channel Drainer, Premium Square Drain"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="admin-form-input"
                disabled={loading}
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="product-model" className="admin-form-label">
                Model / Code <span className="admin-required">*</span>
              </label>
              <input
                id="product-model"
                type="text"
                required
                placeholder="e.g. CLX 8002, CLX 801, CLX 804"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="admin-form-input"
                disabled={loading}
              />
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group" style={{ flex: 1 }}>
                <label htmlFor="product-category" className="admin-form-label">
                  Category
                </label>
                <select
                  id="product-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="admin-form-select"
                  disabled={loading}
                >
                  <option value="channel-drainers">Channel Drainers</option>
                  <option value="premium-square-drains">Premium Square Drains</option>
                  <option value="tile-insert">Tile Insert</option>
                  <option value="flat-cut">Flat Cut</option>
                  <option value="other-products">Other Products / Accessories</option>
                </select>
              </div>

              <div className="admin-form-group" style={{ flex: 1 }}>
                <label htmlFor="product-material" className="admin-form-label">
                  Material Grade
                </label>
                <select
                  id="product-material"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="admin-form-select"
                  disabled={loading}
                >
                  <option value="AISI 304 Stainless Steel">AISI 304 Stainless Steel</option>
                  <option value="AISI 304 & AISI 202 Stainless Steel">AISI 304 & AISI 202 Dual Grade</option>
                  <option value="High-Grade Polymer">High-Grade Polymer</option>
                  <option value="Precision Polymer">Precision Polymer</option>
                </select>
              </div>
            </div>
          </div>

          {/* Available Sizes Section */}
          <div className="admin-card-section" style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 className="admin-section-heading" style={{ margin: 0 }}>Available Sizes</h3>
              <span className="admin-badge-count">{availableSizes.length} sizes</span>
            </div>
            <p className="admin-hint-text">
              Add multiple dimensions for this product. These will appear as selectable size chips on the product detail page.
            </p>

            {/* Quick Presets */}
            <div className="admin-presets-container">
              <span className="admin-presets-label">Quick Presets:</span>
              {SIZE_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyPreset(preset.sizes)}
                  className="admin-preset-btn"
                  disabled={loading}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Size Addition Input */}
            <div className="admin-size-input-row">
              <input
                type="text"
                placeholder="e.g. 105 × 600 mm or 150 × 150 mm"
                value={newSizeInput}
                onChange={(e) => setNewSizeInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSize();
                  }
                }}
                className="admin-form-input"
                disabled={loading}
              />
              <button
                type="button"
                onClick={handleAddSize}
                className="btn btn-secondary admin-add-size-btn"
                disabled={loading || !newSizeInput.trim()}
              >
                <Plus size={16} />
                <span>Add Size</span>
              </button>
            </div>

            {/* Current Sizes List */}
            {availableSizes.length > 0 ? (
              <div className="admin-sizes-tags-list">
                {availableSizes.map((size, index) => (
                  <div key={index} className="admin-size-tag-item">
                    <span className="admin-size-tag-text">{size}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSize(index)}
                      className="admin-size-remove-btn"
                      aria-label={`Remove size ${size}`}
                      disabled={loading}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="admin-empty-sizes-box">
                No available sizes specified yet. (Leave empty if not applicable for this product category).
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Image Upload & Preview */}
        <div className="admin-form-col">
          <div className="admin-card-section">
            <h3 className="admin-section-heading">
              Product Image <span className="admin-required">*</span>
            </h3>
            <p className="admin-hint-text">
              High resolution image on a transparent or clean background (JPG, PNG, WebP up to 5MB).
            </p>

            {/* Image Preview Box */}
            <div className="admin-image-preview-box">
              {imagePreview ? (
                <div className="admin-preview-content">
                  <img
                    src={imagePreview.startsWith('blob:') ? imagePreview : getFullImageUrl(imagePreview)}
                    alt="Product preview"
                    className="admin-preview-img"
                  />
                  <div className="admin-preview-badge">
                    <Check size={14} /> Current Image
                  </div>
                </div>
              ) : (
                <div className="admin-preview-placeholder">
                  <ImageIcon size={48} className="admin-placeholder-icon" />
                  <p>No image selected yet</p>
                </div>
              )}
            </div>

            {/* Upload Button Input */}
            <div className="admin-upload-actions">
              <label className="btn btn-secondary admin-file-upload-label">
                <Upload size={16} />
                <span>{imagePreview ? 'Change Image File' : 'Upload Product Image'}</span>
                <input
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                  disabled={loading}
                />
              </label>

              {imageFile && (
                <span className="admin-selected-filename">
                  {imageFile.name} ({(imageFile.size / (1024 * 1024)).toFixed(2)} MB)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Form Bottom Bar */}
      <div className="admin-form-footer">
        <Link to="/admin" className="btn btn-secondary admin-cancel-btn">
          <ArrowLeft size={16} />
          <span>Cancel</span>
        </Link>

        <button
          type="submit"
          className="btn btn-primary admin-save-btn"
          disabled={loading}
        >
          {loading ? (
            <span className="admin-btn-content">
              <span className="admin-spinner-small" />
              {isEdit ? 'Saving Changes...' : 'Creating Product...'}
            </span>
          ) : (
            <span className="admin-btn-content">
              <Check size={18} />
              {isEdit ? 'Save Product Changes' : 'Create Product'}
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
