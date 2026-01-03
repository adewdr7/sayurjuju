// ================================================== // media.js // Pusat rujukan & optimasi media Cloudinary // Dipakai oleh: index.html, product.html, edit-product.html // ==================================================

/**

Mengoptimalkan URL Cloudinary agar hemat bandwidth

@param {string} url - URL asli dari Cloudinary

@param {Object} options - Opsi optimasi

@param {number} options.width - lebar gambar (px)

@param {string} options.quality - kualitas (auto | angka)

@param {string} options.format - format (auto | webp | avif)

@param {string} options.crop - mode crop (fill | fit | scale)

@returns {string} */ export function mediaUrl(url, options = {}) { 
    if (!url || typeof url !== "string") return url; 
    if (!url.includes("res.cloudinary.com")) return url;

    const { width = 400, quality = "auto", format = "auto", crop = "fill" } = options;

 // Perbaikan: Gunakan template literal agar variabel masuk ke string URL
    return url.replace("/upload/", `/upload/f_${format},q_${quality},c_${crop},w_${width}/`); 
}

/**

Helper khusus thumbnail kecil (cart, admin list, dsb) */ export function mediaThumb(url) { return mediaUrl(url, { width: 80 }); }


/**

Helper khusus gambar detail produk */ export function mediaDetail(url) { return mediaUrl(url, { width: 800 }); }


/**

Helper khusus gambar grid / katalog */ export function mediaGrid(url) { return mediaUrl(url, { width: 400 }); }
