import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-medium text-gray-900 mb-4 drop-shadow-lg">Privacy Policy</h1>
              <p className="text-lg text-gray-800 drop-shadow-md">
                Your privacy is important to us. Learn how we protect your information.
              </p>
            </div>

          <Card className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="text-white text-xl drop-shadow-md">UAE Property Guide Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-gray-900 space-y-6 p-8">
              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">1. Information We Collect</h2>
                <p className="text-gray-800">
                  We collect information you provide directly to us, such as when you create an account, make an
                  inquiry, contact us, or use our services. This may include:
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-800">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Account credentials and profile information</li>
                  <li>Communication preferences and inquiry details</li>
                  <li>Usage data and website interaction information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">2. How We Use Your Information</h2>
                <p className="text-gray-800">We use the information we collect to:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-800">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">3. Information Sharing and Disclosure</h2>
                <p className="text-gray-800">We may share your information in the following situations:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-800">
                  <li>With property developers and real estate professionals when you make inquiries</li>
                  <li>With service providers who perform services on our behalf</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a merger, sale, or acquisition of all or part of our business</li>
                </ul>
                <p className="mt-2 text-gray-800">
                  We do not sell, trade, or otherwise transfer your personal information to third parties for their
                  marketing purposes without your consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">4. Data Security</h2>
                <p className="text-gray-800">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet or electronic storage is completely secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">5. Data Retention</h2>
                <p className="text-gray-800">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required or permitted by law. We will delete or
                  anonymize your personal information when it is no longer needed.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">6. Your Rights and Choices</h2>
                <p className="text-gray-800">You have the right to:</p>
                <ul className="list-disc ml-6 mt-2 text-gray-800">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-800">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site
                  traffic, and understand where our visitors are coming from. You can control cookies through your
                  browser settings, but disabling cookies may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">8. Third-Party Links</h2>
                <p className="text-gray-800">
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices or content of these external sites. We encourage you to review the privacy policies of any
                  third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">9. Children's Privacy</h2>
                <p className="text-gray-800">
                  Our services are not directed to children under the age of 18. We do not knowingly collect personal
                  information from children under 18. If we become aware that we have collected personal information
                  from a child under 18, we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-800">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our
                  services after any modifications indicates your acceptance of the updated Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-3">11. Contact Us</h2>
                <p className="text-gray-800">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-2 text-gray-800">
                  <p>Email: admin@uaepropertyguide.com</p>
                  <p>Address: Dubai International Financial Centre, Dubai, UAE</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-sm text-gray-700">Last updated: March 2024</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
