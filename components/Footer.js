export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white mt-20">
  <div className="max-w-7xl mx-auto px-8 py-14">

    <div className="grid md:grid-cols-4 gap-10">

      {/* Company */}
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Inphora
        </h2>

        <p className="text-blue-100">
          Empowering educational institutions with a modern,
          secure, and efficient School ERP solution.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-2 text-blue-100">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Services
        </h3>

        <ul className="space-y-2 text-blue-100">
          <li>Student Management</li>
          <li>Attendance Tracking</li>
          <li>Fee Management</li>
          <li>Examination System</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Contact Us
        </h3>

        <div className="space-y-3 text-blue-100">
          <p>📧 support@inphora.com</p>
          <p>☎ +91 98765 43210</p>
          <p>
            📍 123 Tech Park,
            Lucknow, Uttar Pradesh,
            India
          </p>
        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-blue-500 mt-10 pt-6 text-center text-blue-100">
      © 2026 Inphora Pvt. Ltd. All Rights Reserved.
    </div>

  </div>
  
</footer>
  );
}