import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "allJewelry": "All Jewelry",
      "necklaces": "Necklaces",
      "rings": "Rings",
      "earrings": "Earrings",
      "search": "Search...",
      
      // Product Details
      "addToCart": "Add to Cart",
      "specifications": "Specifications",
      
      // Cart
      "shoppingCart": "Shopping Cart",
      "cartEmpty": "Your cart is empty",
      "continueShopping": "Continue Shopping",
      "orderSummary": "Order Summary",
      "subtotal": "Subtotal",
      "shipping": "Shipping",
      "total": "Total",
      "free": "Free",
      "proceedToCheckout": "Proceed to Checkout",
      
      // Newsletter
      "stayUpdated": "Stay Updated",
      "newsletterDesc": "Subscribe to our newsletter for exclusive offers and new arrivals.",
      "subscribe": "Subscribe",
      "enterEmail": "Enter your email",
      
      // Features
      "premiumQuality": "Premium Quality",
      "premiumDesc": "Crafted with the finest materials and attention to detail",
      "lifetimeWarranty": "Lifetime Warranty",
      "warrantyDesc": "We stand behind the quality of our jewelry",
      "certifiedAuthentic": "Certified Authentic",
      "certifiedDesc": "Every piece comes with a certificate of authenticity"
    }
  },
  ar: {
    translation: {
      // Navigation
      "allJewelry": "جميع المجوهرات",
      "necklaces": "قلادات",
      "rings": "خواتم",
      "earrings": "أقراط",
      "search": "بحث...",
      
      // Product Details
      "addToCart": "أضف إلى السلة",
      "specifications": "المواصفات",
      
      // Cart
      "shoppingCart": "عربة التسوق",
      "cartEmpty": "عربة التسوق فارغة",
      "continueShopping": "مواصلة التسوق",
      "orderSummary": "ملخص الطلب",
      "subtotal": "المجموع الفرعي",
      "shipping": "الشحن",
      "total": "المجموع",
      "free": "مجاني",
      "proceedToCheckout": "المتابعة للدفع",
      
      // Newsletter
      "stayUpdated": "ابق على اطلاع",
      "newsletterDesc": "اشترك في نشرتنا الإخبارية للحصول على عروض حصرية ومنتجات جديدة",
      "subscribe": "اشترك",
      "enterEmail": "أدخل بريدك الإلكتروني",
      
      // Features
      "premiumQuality": "جودة ممتازة",
      "premiumDesc": "مصنوعة من أجود المواد مع الاهتمام بالتفاصيل",
      "lifetimeWarranty": "ضمان مدى الحياة",
      "warrantyDesc": "نحن نضمن جودة مجوهراتنا",
      "certifiedAuthentic": "معتمدة وأصلية",
      "certifiedDesc": "كل قطعة تأتي مع شهادة أصالة"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;