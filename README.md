My Next Task
مشروع ويب مبني باستخدام Next.js و React لعرض تفاصيل المنتجات وصفحة الفوتر بشكل احترافي بناءً على تصميم Figma.
المميزات

صفحة تفاصيل المنتج مع:
صور متعددة للمنتج مع معاينة جانبية.
خيارات قابلة للاختيار (اللون، المقاس، الكمية) مع أزرار تفاعلية.
أسعار وعروض تخفيضات (مثل 25% OFF).
أيقونات للوishlist والعربة.


تصميم متجاوب باستخدام Tailwind CSS.
فوتر احترافي يحتوي على:
قسم Customer Service مع معلومات الاتصال (هاتف، إيميل، عنوان).
روابط التواصل الاجتماعي (فيسبوك، إنستغرام، تويتر، لينكدإن، واتساب، تليجرام).
نموذج اشتراك في النشرة البريدية.



بدء التشغيل

تثبيت الحزم:
npm install


تشغيل المشروع:
npm run dev


افتح المتصفح على http://localhost:3000


هيكل المشروع
src/app/
  ├── _components/
  │   ├── Comment.tsx             # كومنتات واراء العملاء والتقيم 
  │   ├── Footer.tsx              # مكون الفوتر مع Customer Service وSocial Icons
  │   ├── Navbar.tsx              # مكون الناف بار مع Customer Service وSocial Icons
  │   ├── ProductDetails.tsx      # مكون تفاصيل المنتج  مع Customer Service وSocial Icons
  │   ├── RatingReviews.tsx       # مكون تقيم الصفحه  مع Customer Service وSocial Icons
  │   └── SimilarItems.tsx        # مكون تفاصيل المنتج مع الصور والخيارات
  ├── layout.tsx                  # الـ layout العام
  ├── page.tsx                    # الصفحة تسجيل الدخول 
  ├── product.tsx                 # بنرن فيها كل component
  ├── product.tsx                 # صفحت انشاء حساب                                     فيه مشكله فى api 
  ├── register.tsx                # بنرن فيها كل component               
  └── verify.tsx                  # صفحت verify                                           فيه مشكله فى api 
public/                           # مجلد الصور (مثل dress1.jpg, blouse1.jpg)

المتطلبات

Node.js 18 أو أحدث
npm أو yarn

المساهمة
للمساهمة في المشروع، يرجى عمل Fork ثم إرسال Pull Request.
الرخصة
هذا المشروع مخصص للاستخدام الشخصي فقط.