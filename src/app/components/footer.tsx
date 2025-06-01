// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-2">SRVS Company</h2>
          <p className="text-sm">
            نقدم خدمات تقنية متكاملة تشمل تصميم المواقع والجرافيك ديزاين بجودة واحترافية.


          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">روابط مهمة</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">من نحن</a></li>
            <li><a href="/contact" className="hover:text-white">تواصل معنا</a></li>
            <li><a href="/privacy" className="hover:text-white">سياسة الخصوصية</a></li>
            <li><a href="/terms" className="hover:text-white">الشروط والأحكام</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">تابعنا على</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-white" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="https://youtube.com" className="hover:text-white" aria-label="YouTube">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} SRVS Company. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
