import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium text-primary-dark mb-4">Terms and Conditions</h1>
            <p className="text-lg text-secondary-dark">Please read these terms carefully before using our services</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary-dark">UAE Property Guide Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-secondary-dark space-y-6">
              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using UAE Property Guide ("we," "our," or "us"), you accept and agree to be bound by
                  the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                  use this service.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials on UAE Property Guide for
                  personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                  title, and under this license you may not:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">3. Disclaimer</h2>
                <p>
                  The materials on UAE Property Guide are provided on an 'as is' basis. UAE Property Guide makes no
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                  without limitation, implied warranties or conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">4. Property Information</h2>
                <p>
                  All property information displayed on our platform is provided by third-party developers, brokers, and
                  real estate agents. While we strive to ensure accuracy, UAE Property Guide does not guarantee the
                  completeness, accuracy, or timeliness of any property information. Users should verify all details
                  independently before making any investment decisions.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">5. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and
                  current at all times. You are responsible for safeguarding the password and for all activities that
                  occur under your account.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">6. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                  information when you use our service. By using our service, you agree to the collection and use of
                  information in accordance with our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">7. Limitations</h2>
                <p>
                  In no event shall UAE Property Guide or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on UAE Property Guide, even if UAE Property Guide or an
                  authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">8. Revisions and Errata</h2>
                <p>
                  The materials appearing on UAE Property Guide could include technical, typographical, or photographic
                  errors. UAE Property Guide does not warrant that any of the materials on its website are accurate,
                  complete, or current. UAE Property Guide may make changes to the materials contained on its website at
                  any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">9. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the United
                  Arab Emirates, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or
                  location.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-medium text-primary-dark mb-3">10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at
                  admin@uaepropertyguide.com.
                </p>
              </div>

              <div className="pt-4 border-t border-primary-light">
                <p className="text-sm text-secondary-light">Last updated: March 2024</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
