export default function ContactInfo() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <ul className="space-y-2">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@miyofashion.com" className="text-blue-600 underline">
            info@miyofashion.com
          </a>
        </li>
        <li>
          <strong>Factory Locations:</strong> Guangzhou, China &amp; Vietnam (exact city locations to be confirmed)
        </li>
        <li>
          <strong>Office Address:</strong> Haizhu District, Guangzhou, China
        </li>
        <li>
          <strong>Phone Numbers:</strong>
          <ul className="ml-4">
            <li>
              <strong>Enzo:</strong> <a href="tel:+8617665092011" className="underline">+86 176 6509 2011</a> (English &amp; Chinese)
            </li>
            <li>
              <strong>Hong Xia:</strong> <a href="tel:+8615918405017" className="underline">+86 159 1840 5017</a> (Chinese only)
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}