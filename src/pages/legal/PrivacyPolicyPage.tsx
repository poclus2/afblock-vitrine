import React from 'react';
import Seo from '../../components/Seo';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="py-24 px-4 sm:px-6 lg:px-8">
            <Seo title="Privacy Policy" description="Read our Privacy Policy to understand how we collect, use, and protect your data. Afblock is committed to your privacy and security." />
            <div className="max-w-4xl mx-auto">
                <div className="bg-white px-8 py-12 shadow-sm border border-slate-100 dark:border-gray-800 rounded-2xl dark:bg-surface-dark dark:text-gray-100 font-inter text-[14px] leading-[1.6] text-neutral-dark">
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-bold mb-2 text-primary dark:text-white">Afblock - Privacy Policy</h1>
                        <p className="text-gray-500 dark:text-gray-400">Last updated: January 2nd, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        {/* 1. Who We Are */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">1. Who We Are</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock Technologies L.L.C-FZ ("Afblock", "we", "our", or "us") is a technology company incorporated in Dubai, United Arab Emirates.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock provides a business-facing financial infrastructure that enables companies to operate with fiat currencies and stablecoins. Afblock does not operate as a bank, financial institution, or custodian, and does not directly hold or safeguard client funds. All fiat and stablecoin funds are held by regulated third-party financial service providers.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                This Privacy Policy explains how we collect, use, share, and protect personal and business data when companies access or use Afblock’s services.
                            </p>
                        </section>

                        {/* 2. Data We Collect */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">2. Data We Collect</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">When businesses create and use an Afblock account, we may collect the following categories of data:</p>

                            <div className="pl-4 space-y-4 text-gray-700 dark:text-gray-300">
                                <div>
                                    <h3 className="font-semibold mb-2">a. Business Information</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Company name</li>
                                        <li>Country of incorporation</li>
                                        <li>Registration number</li>
                                        <li>Registered business address</li>
                                        <li>Tax identification information (where applicable)</li>
                                        <li>Business activity and expected transaction volumes</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">b. Stakeholder Information</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Names of directors and officers</li>
                                        <li>Ultimate Beneficial Owners (UBOs)</li>
                                        <li>Roles and ownership information</li>
                                        <li>Country of residence</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">c. Verification & Compliance Data</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Corporate documents (e.g. certificate of incorporation, articles of association)</li>
                                        <li>Identity and verification documents of directors or UBOs, where required by regulation</li>
                                        <li>Compliance-related assessments and records</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">d. Account & Usage Data</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Login credentials and authentication data</li>
                                        <li>Account activity and settings</li>
                                        <li>Transactional metadata (excluding custody of funds)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">e. Technical Data</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>IP address</li>
                                        <li>Device and browser information</li>
                                        <li>Log files and security-related data</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. How We Use Data */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">3. How We Use Data</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Afblock uses the data collected for the following purposes:</p>
                            <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
                                <li>
                                    <span className="font-semibold">Account creation and management</span>
                                    <p>To create, operate, and manage business accounts on the Afblock platform.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Identity verification and compliance</span>
                                    <p>To perform required Know Your Business (KYB), anti-money laundering (AML), and counter-terrorist financing (CTF) checks, including ongoing monitoring where applicable.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Service delivery and operations</span>
                                    <p>To enable access to Afblock’s infrastructure, including fiat and stablecoin operations, transaction processing, and account functionality.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Security and fraud prevention</span>
                                    <p>To protect the platform, prevent unauthorized access, detect suspicious activity, and ensure system integrity.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Legal and regulatory obligations</span>
                                    <p>To comply with applicable laws, regulations, lawful requests from authorities, and obligations imposed by regulated partners.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Communication and support</span>
                                    <p>To communicate with account holders regarding onboarding status, account activity, service updates, and customer support inquiries.</p>
                                </li>
                            </ul>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">Afblock does not use personal data for automated decision-making that produces legal or similarly significant effects without appropriate safeguards.</p>
                        </section>

                        {/* 4. Data Sharing & Third-Party Providers */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">4. Data Sharing & Third-Party Providers</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Afblock may share data with trusted third parties strictly where necessary to operate the platform and comply with regulatory requirements.</p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">These third parties include:</p>
                            <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
                                <li>
                                    <span className="font-semibold">Regulated financial service providers</span>
                                    <p>Such as payment service providers, fiat account providers, and stablecoin infrastructure partners who hold or process funds on behalf of clients.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Identity verification and compliance partners</span>
                                    <p>For KYB, AML, sanctions screening, and risk assessments.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Technology and infrastructure providers</span>
                                    <p>Including cloud hosting, security services, analytics, and communication tools.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Regulators and authorities</span>
                                    <p>Where required by law, regulation, or lawful request.</p>
                                </li>
                            </ul>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">All third-party providers are selected based on security, confidentiality, and compliance standards. Data is shared only to the extent necessary and subject to contractual safeguards.</p>
                            <p className="text-gray-700 dark:text-gray-300">Afblock does not sell personal data to third parties.</p>
                        </section>

                        {/* 5. Data Retention */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">5. Data Retention</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Afblock retains personal and business data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including compliance with legal, regulatory, and contractual obligations.</p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Retention periods may vary depending on the type of data and applicable requirements, and may include:</p>
                            <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
                                <li>
                                    <span className="font-semibold">Account and onboarding data</span>
                                    <p>Retained for the duration of the business relationship and for a legally required period thereafter.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Compliance and verification records</span>
                                    <p>Retained in accordance with applicable AML, KYB, and financial regulations imposed by law or by regulated partners.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">Technical and security data</span>
                                    <p>Retained for a limited period to ensure system security, monitoring, and fraud prevention.</p>
                                </li>
                            </ul>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">When data is no longer required, it is securely deleted or anonymized in accordance with industry best practices.</p>
                        </section>

                        {/* 6. Data Security & Protection Measures */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">6. Data Security & Protection Measures</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Afblock implements appropriate technical and organizational measures designed to protect data against unauthorized access, loss, misuse, alteration, or disclosure.</p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">These measures include, but are not limited to:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                <li>Encrypted data transmission and storage where appropriate</li>
                                <li>Access controls and authentication mechanisms</li>
                                <li>Monitoring and logging of system activity</li>
                                <li>Regular security reviews and updates</li>
                                <li>Use of reputable infrastructure and cloud service providers</li>
                            </ul>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">While no system can guarantee absolute security, Afblock continuously works to maintain a high standard of data protection consistent with industry norms.</p>
                        </section>

                        {/* 7. Your Rights */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">7. Your Rights</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Depending on applicable data protection laws, individuals whose personal data is processed by Afblock may have certain rights, including:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                <li>The right to access their personal data</li>
                                <li>The right to request correction or update of inaccurate data</li>
                                <li>The right to request deletion of personal data, subject to legal and regulatory obligations</li>
                                <li>The right to object to or restrict certain processing activities</li>
                                <li>The right to request data portability, where applicable</li>
                            </ul>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">Requests to exercise these rights may be subject to identity verification and legal limitations, particularly where data must be retained for compliance or regulatory purposes.</p>
                        </section>

                        {/* 8. International Data Transfers */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">8. International Data Transfers</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Afblock operates internationally and may process or transfer data across borders.</p>
                            <p className="text-gray-700 dark:text-gray-300">Where personal data is transferred outside the jurisdiction in which it was collected, Afblock ensures that appropriate safeguards are in place in accordance with applicable data protection laws, including contractual protections and security measures.</p>
                        </section>

                        {/* 9. Contact Information */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">9. Contact Information</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">If you have any questions about this Privacy Policy or how Afblock processes data, you may contact us at:</p>
                            <div className="bg-blue-50 dark:bg-black/30 p-6 rounded-lg text-gray-700 dark:text-gray-300">
                                <p className="font-semibold">Afblock Technologies L.L.C-FZ</p>
                                <p>Dubai, United Arab Emirates</p>
                                <p className="mt-2">Email: <a href="mailto:support@afblock.com" className="text-primary hover:underline">support@afblock.com</a></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
