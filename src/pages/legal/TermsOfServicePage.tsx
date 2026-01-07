import React from 'react';

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white px-8 py-12 shadow-sm border border-slate-100 dark:border-gray-800 rounded-2xl dark:bg-surface-dark dark:text-gray-100 font-inter text-[14px] leading-[1.6] text-neutral-dark">
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-bold mb-2 text-primary dark:text-white">Afblock - Terms of Service</h1>
                        <p className="text-gray-500 dark:text-gray-400">Last updated: January 2nd, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        {/* 1. Introduction */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">1. Introduction & Acceptance of Terms</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                These Terms of Service ("Terms") govern the access to and use of the services provided by Afblock Technologies L.L.C-FZ ("Afblock", "we", "our", or "us"), a company incorporated in Dubai, United Arab Emirates.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock provides a technology platform designed to enable businesses to operate with fiat currencies and stablecoins through regulated third-party financial service providers.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                By creating an account, accessing, or using the Afblock platform (the "Services"), you confirm that you are acting on behalf of a business entity and that you have the authority to bind such entity to these Terms. You further acknowledge that you have read, understood, and agree to be bound by these Terms, as well as by our Privacy Policy, which forms an integral part of these Terms.
                            </p>

                            <h3 className="font-semibold mb-2 mt-6 text-neutral-dark dark:text-gray-100">Electronic Communications</h3>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                By creating an account or using the Services, the business consents to receive all communications, notices, disclosures, and information related to the Services electronically, including via email, the Afblock platform, or other electronic means.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Such communications may include, without limitation, onboarding updates, compliance requests, account notifications, transaction information, service updates, and legally required notices.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                The business agrees that electronic communications satisfy any legal requirement that such communications be provided in writing. The business is responsible for maintaining accurate and up-to-date contact information and for regularly monitoring electronic communications from Afblock.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                If you do not agree to these Terms, you must not access or use the Services.
                            </p>
                        </section>

                        {/* 2. Scope of Services */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">2. Scope of Services</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock provides a technology platform that enables businesses to access and operate financial workflows involving fiat currencies and stablecoins through regulated third-party financial service providers.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">The Services may include, without limitation:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Access to business accounts linked to fiat and stablecoin operations</li>
                                <li>Onboarding and verification of businesses and their stakeholders (KYB)</li>
                                <li>Fiat deposit and withdrawal workflows facilitated by regulated partners</li>
                                <li>Automatic conversion of fiat funds into stablecoins, where applicable</li>
                                <li>Stablecoin-based settlement and payment capabilities</li>
                                <li>Account management, reporting, and transaction visibility</li>
                            </ul>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock acts solely as a technology and infrastructure provider. Afblock is not a bank, not a payment institution, not a money services business, and not a custodian of client funds. Afblock does not issue fiat currency or stablecoins and does not directly hold, safeguard, or control client funds at any time.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                All fiat and stablecoin-related services are provided and executed by regulated third-party financial service providers, subject to their own terms, conditions, and regulatory obligations.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Afblock does not guarantee the availability, performance, or uninterrupted operation of services provided by third-party providers and shall not be responsible for delays, failures, or disruptions caused by such providers.
                            </p>
                        </section>

                        {/* 3. Eligibility & Account Registration */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">3. Eligibility & Account Registration</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                The Services are available exclusively to business entities. Individuals acting in a personal capacity are not eligible to access or use the Services unless expressly authorized by Afblock.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">To be eligible to create an account and use the Services, a business must:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Be a legally incorporated entity in a recognized jurisdiction</li>
                                <li>Act through a duly authorized representative with authority to bind the business</li>
                                <li>Provide complete, accurate, and up-to-date information during registration and onboarding</li>
                                <li>Comply with all applicable laws, regulations, and compliance requirements</li>
                            </ul>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Each business may register only one primary account, unless otherwise approved by Afblock. Afblock reserves the right to refuse, suspend, or terminate account registration at its sole discretion, including where eligibility requirements are not met or where regulatory or compliance concerns arise.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                The business is responsible for ensuring that all information submitted to Afblock remains accurate and current. Afblock may request updates or additional information at any time as part of ongoing compliance and monitoring obligations.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Afblock does not currently offer Services to consumers or retail users. Any future expansion of services to non-business users shall be subject to separate terms and conditions.
                            </p>
                        </section>

                        {/* 4. Onboarding & Verification */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">4. Onboarding & Verification</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Access to the Services is subject to the successful completion of Afblock’s onboarding and verification process.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">As part of this process, Afblock may require businesses to provide information and documentation relating to, including but not limited to:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>The business entity and its legal structure</li>
                                <li>Directors, officers, and authorized representatives</li>
                                <li>Ultimate beneficial owners (UBOs)</li>
                                <li>Business activities, source of funds, and expected use of the Services</li>
                                <li>Any additional information required to meet regulatory, compliance, or risk assessment obligations</li>
                            </ul>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Verification may involve checks conducted by Afblock and by regulated third-party service providers, including identity verification, sanctions screening, and anti-money laundering (AML) assessments.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Afblock reserves the right to:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Approve or reject an onboarding application</li>
                                <li>Request additional information or documentation at any time</li>
                                <li>Impose conditions, limitations, or restrictions on account usage</li>
                                <li>Suspend or terminate access to the Services where verification requirements are not satisfied</li>
                            </ul>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Until verification is successfully completed, access to certain features of the Services, including deposits, withdrawals, and transaction execution, may be restricted or unavailable.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Verification timelines may vary depending on the completeness of information provided, jurisdictional requirements, and third-party review processes. Afblock does not guarantee approval or specific onboarding timeframes.
                            </p>
                        </section>

                        {/* 5. Account Use & Responsibilities */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">5. Account Use & Responsibilities</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">The business is responsible for all activities conducted through its Afblock account.</p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">The business agrees to:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Use the Services solely for lawful business purposes</li>
                                <li>Ensure that all activities conducted through the account comply with applicable laws, regulations, and sanctions requirements</li>
                                <li>Maintain the confidentiality and security of account credentials</li>
                                <li>Restrict account access to authorized individuals only</li>
                                <li>Promptly notify Afblock of any unauthorized access, security breach, or suspicious activity</li>
                            </ul>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                The business remains fully responsible for the actions of its directors, officers, employees, agents, or any other persons authorized to access or use the account.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">The business shall not:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Use the Services for illegal, fraudulent, or misleading activities</li>
                                <li>Attempt to circumvent compliance controls, verification processes, or transaction monitoring</li>
                                <li>Use the Services in a manner that could expose Afblock or its partners to regulatory, legal, or reputational risk</li>
                                <li>Interfere with the operation, security, or integrity of the platform</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300">
                                Afblock may implement security measures, usage limits, or monitoring mechanisms to protect the platform and comply with regulatory obligations. Failure to comply with these requirements may result in restrictions, suspension, or termination of access to the Services.
                            </p>
                        </section>

                        {/* 6. Prohibited Use */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">6. Prohibited Use</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">The business shall not use the Services, directly or indirectly, for any prohibited, illegal, or high-risk activities, including but not limited to:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Money laundering, terrorist financing, or sanctions evasion</li>
                                <li>Fraud, scams, or deceptive practices</li>
                                <li>Use of mixers, tumblers, privacy-enhancing services, or obfuscation tools</li>
                                <li>Transactions involving darknet markets or illicit goods or services</li>
                                <li>Activities involving sanctioned individuals, entities, or jurisdictions</li>
                                <li>Circumventing compliance, monitoring, or transaction controls</li>
                                <li>Reverse engineering, exploiting, or abusing the platform or its APIs</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300">
                                Afblock reserves the right to restrict, suspend, or terminate access to the Services where prohibited use is suspected or identified.
                            </p>
                        </section>

                        {/* 7. Fiat & Stablecoin Operations */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">7. Fiat & Stablecoin Operations</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Services enable businesses to access fiat and stablecoin-related operations through regulated third-party financial service providers.
                            </p>

                            <h3 className="font-semibold mb-2 text-neutral-dark dark:text-gray-100">7.1 Fiat Deposits</h3>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Businesses may deposit fiat funds into designated accounts provided by regulated third-party partners. Fiat deposits are subject to the terms, conditions, processing times, and limits imposed by such partners.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Where applicable, fiat funds deposited into an Afblock-linked account may be automatically converted into stablecoins at the applicable rate and subject to applicable fees. Afblock does not control or guarantee exchange rates, settlement times, or availability of fiat deposit services.
                            </p>

                            <h3 className="font-semibold mb-2 text-neutral-dark dark:text-gray-100">7.2 Stablecoin Balances</h3>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Stablecoin balances displayed within the Afblock platform represent funds held and managed by regulated third-party providers. Afblock does not issue stablecoins and does not exercise custody or control over such assets.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Stablecoin transactions are subject to network conditions, blockchain confirmations, and third-party provider processing, which may result in delays or failures beyond Afblock’s control.
                            </p>

                            <h3 className="font-semibold mb-2 text-neutral-dark dark:text-gray-100">7.3 Withdrawals</h3>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Businesses may request withdrawals of fiat or stablecoins in accordance with the options made available through the platform and subject to verification, compliance, and risk controls.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Withdrawals may be delayed, limited, or declined where required by law, regulation, compliance obligations, or third-party provider requirements.
                            </p>

                            <h3 className="font-semibold mb-2 text-neutral-dark dark:text-gray-100">7.4 Transaction Finality</h3>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Once a fiat or stablecoin transaction has been executed by a third-party provider or recorded on a blockchain network, such transactions are generally irreversible. Businesses are responsible for ensuring the accuracy of payment instructions, beneficiary details, and transaction parameters.
                            </p>

                            <h3 className="font-semibold mb-2 text-neutral-dark dark:text-gray-100">7.5 Third-Party Dependency</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                All fiat and stablecoin operations are executed by third-party financial service providers and networks. Afblock shall not be responsible for losses, delays, or failures arising from third-party actions, network congestion, technical outages, or regulatory restrictions.
                            </p>
                        </section>

                        {/* 8. Beta Services & Availability */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">8. Beta Services & Availability</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Certain features or services may be offered as beta, experimental, or early-access features. Such features are provided on an "as is" and "as available" basis and may be modified, suspended, or discontinued at any time.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock does not guarantee uninterrupted or error-free operation of the Services. Temporary outages, maintenance, upgrades, or technical issues may occur without prior notice.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Afblock shall not be liable for losses or damages arising from service interruptions, beta features, or system unavailability.
                            </p>
                        </section>

                        {/* 9. Fees & Charges */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">9. Fees & Charges</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock may charge fees for access to or use of certain Services, including but not limited to onboarding, fiat and stablecoin operations, transaction processing, or other platform features.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Applicable fees will be clearly disclosed to the business prior to, or at the time of, the relevant transaction or service. Fees may be displayed within the platform, communicated through documentation, or agreed contractually where applicable.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Fees charged by regulated third-party financial service providers, including banking partners, payment processors, or blockchain networks, are determined independently by such providers and may be passed on to the business. Afblock does not control third-party fees and shall not be responsible for changes thereto.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock reserves the right to modify its fees at any time. Where required, businesses will be notified of material changes in advance through the platform or by electronic communication. Continued use of the Services following such changes constitutes acceptance of the updated fees.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                All fees are non-refundable unless expressly stated otherwise or required by applicable law.
                            </p>
                        </section>

                        {/* 10. Third-Party Providers */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">10. Third-Party Providers</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock’s Services rely on third-party service providers, including regulated financial institutions, payment service providers, fiat account providers, stablecoin infrastructure providers, blockchain networks, and compliance partners.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                These third-party providers operate independently and are subject to their own terms, conditions, policies, and regulatory obligations. The business acknowledges and agrees that its use of certain Services may be governed by, or dependent upon, such third-party terms.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock does not control, operate, or manage the services provided by third-party providers and shall not be responsible for the acts, omissions, performance, availability, or failures of such providers.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Any disruption, delay, suspension, or termination of services by a third-party provider may affect the availability or functionality of the Services. Afblock shall not be liable for losses or damages arising from third-party actions, technical failures, regulatory decisions, or network conditions beyond Afblock’s reasonable control.
                            </p>
                        </section>

                        {/* 11. Compliance, Monitoring & Restrictions */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">11. Compliance, Monitoring & Restrictions</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock operates in accordance with applicable laws, regulations, and compliance obligations, including anti-money laundering (AML), counter-terrorist financing (CTF), sanctions, and financial crime prevention requirements.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                To meet these obligations, Afblock may implement monitoring, screening, and risk management measures, including ongoing review of account activity and transactions.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Afblock reserves the right to:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Monitor account activity for compliance and risk purposes</li>
                                <li>Request additional information or documentation at any time</li>
                                <li>Impose transaction limits, restrictions, or enhanced controls</li>
                                <li>Temporarily suspend or permanently restrict access to the Services</li>
                                <li>Terminate accounts where required by law, regulation, or partner obligations</li>
                            </ul>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Restrictions or actions may be applied without prior notice where required to comply with legal, regulatory, or risk-related requirements.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                The business acknowledges that Afblock may be required to share information with regulators, law enforcement authorities, or regulated third-party providers in connection with compliance obligations.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Afblock shall not be liable for any losses, damages, or delays resulting from compliance-related actions taken in good faith.
                            </p>
                        </section>

                        {/* 12. Intellectual Property */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">12. Intellectual Property</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                All intellectual property rights in and to the Afblock platform, including its software, technology, designs, trademarks, logos, content, and documentation, are owned by or licensed to Afblock.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Nothing in these Terms grants the business any right, title, or interest in Afblock’s intellectual property, except for a limited, non-exclusive, non-transferable, and revocable right to access and use the Services in accordance with these Terms.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">The business shall not:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Copy, modify, reproduce, distribute, or create derivative works from the platform</li>
                                <li>Reverse engineer, decompile, or attempt to extract source code</li>
                                <li>Remove or alter any proprietary notices</li>
                                <li>Use Afblock’s trademarks or branding without prior written consent</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300">
                                Any feedback, suggestions, or ideas provided by the business regarding the Services may be used by Afblock without restriction or obligation.
                            </p>
                        </section>

                        {/* 13. Limitation of Liability */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">13. Limitation of Liability</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                To the maximum extent permitted by applicable law, Afblock shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of business, loss of data, or business interruption, arising out of or in connection with the use of, or inability to use, the Services.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock shall not be liable for any losses, delays, failures, or damages resulting from:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Acts or omissions of third-party service providers</li>
                                <li>Blockchain network congestion, errors, or failures</li>
                                <li>Regulatory actions, legal requirements, or compliance measures</li>
                                <li>Unauthorized access to accounts caused by the business’s failure to safeguard credentials</li>
                                <li>Force majeure events beyond Afblock’s reasonable control</li>
                            </ul>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                To the extent permitted by law, Afblock’s total aggregate liability arising under or in connection with these Terms shall be limited to the fees paid by the business to Afblock during the twelve (12) months preceding the event giving rise to the claim.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Nothing in these Terms shall exclude or limit liability where such exclusion or limitation is prohibited by applicable law.
                            </p>
                        </section>

                        {/* 14. Indemnification */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">14. Indemnification</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                The business agrees to indemnify, defend, and hold harmless Afblock, its affiliates, directors, officers, employees, and partners from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>The business’s use of the Services</li>
                                <li>Any breach of these Terms</li>
                                <li>Any violation of applicable laws or regulations</li>
                                <li>Any misuse of the Services by the business or its authorized users</li>
                                <li>Any inaccurate, incomplete, or misleading information provided during onboarding or account use</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300">
                                This indemnification obligation shall survive the termination or expiration of these Terms.
                            </p>
                        </section>

                        {/* 15. Termination */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">15. Termination</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                The business may terminate its account and stop using the Services at any time, subject to the completion of any outstanding obligations and compliance requirements.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock reserves the right to suspend or terminate access to the Services, in whole or in part, at any time, including where:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>The business breaches these Terms</li>
                                <li>Required verification or compliance obligations are not satisfied</li>
                                <li>Afblock is required to do so by law, regulation, or a third-party provider</li>
                                <li>Continued provision of the Services would expose Afblock or its partners to legal, regulatory, or reputational risk</li>
                            </ul>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">Upon termination or suspension of an account:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                                <li>Access to the Services may be restricted or disabled</li>
                                <li>Outstanding transactions may be completed, delayed, or cancelled in accordance with applicable laws and third-party provider requirements</li>
                                <li>Data may be retained as required by law or regulatory obligations</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300">
                                Termination of these Terms shall not affect provisions that by their nature are intended to survive, including indemnification, limitation of liability, and compliance obligations.
                            </p>
                        </section>

                        {/* 16. Changes to the Services or Terms */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">16. Changes to the Services or Terms</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Afblock may update, modify, or amend these Terms or any part of the Services from time to time to reflect changes in the Services, legal or regulatory requirements, or business practices.
                            </p>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                Where changes are material, Afblock will provide reasonable notice through the platform or by electronic communication. Continued access to or use of the Services following the effective date of such changes constitutes acceptance of the updated Terms.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                If the business does not agree to the updated Terms, it must discontinue use of the Services.
                            </p>
                        </section>

                        {/* 17. Force Majeure */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">17. Force Majeure</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Afblock shall not be liable for any failure or delay in the performance of its obligations under these Terms where such failure or delay results from events beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, regulatory actions, network failures, or third-party service disruptions.
                            </p>
                        </section>

                        {/* 18. Governing Law & Jurisdiction */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">18. Governing Law & Jurisdiction</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">
                                These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to conflict of law principles.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Any dispute arising out of or in connection with these Terms or the Services shall be subject to the exclusive jurisdiction of the competent courts of Dubai, United Arab Emirates, unless otherwise required by applicable law.
                            </p>
                        </section>

                        {/* 19. Taxes */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">19. Taxes</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                The business is solely responsible for determining and complying with any tax obligations arising from its use of the Services. Afblock does not provide tax advice and shall not be responsible for any taxes, duties, or levies imposed on the business.
                            </p>
                        </section>

                        {/* 20. Contact Information */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">20. Contact Information</h2>
                            <p className="mb-4 text-gray-700 dark:text-gray-300">For any questions regarding these Terms or the Services, you may contact:</p>
                            <div className="bg-blue-50 dark:bg-black/30 p-6 rounded-lg text-gray-700 dark:text-gray-300">
                                <p className="font-semibold">Afblock Technologies L.L.C-FZ</p>
                                <p>Dubai, United Arab Emirates</p>
                                <p className="mt-2">Email: <a href="mailto:support@afblock.com" className="text-primary hover:underline">support@afblock.com</a></p>
                            </div>
                        </section>

                        {/* 21. Definitions */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-primary dark:text-white">21. Definitions</h2>
                            <ul className="list-disc pl-5 space-y-4 text-gray-700 dark:text-gray-300">
                                <li>
                                    <span className="font-semibold">"Services"</span>
                                    <p>The technology platform and infrastructure provided by Afblock that enables businesses to operate with fiat currencies and stablecoins through regulated third-party service providers.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">"Business" or "Client"</span>
                                    <p>Any legal entity that creates an account and uses the Services for business purposes.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">"Third-Party Providers"</span>
                                    <p>Regulated financial institutions, payment service providers, stablecoin infrastructure providers, blockchain networks, and compliance partners that provide services used in connection with the Afblock platform.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">"Afblock Account"</span>
                                    <p>Your registered account with Afblock.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">"Users"</span>
                                    <p>Anyone authorized to access and use Afblock Services.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">"Terms"</span>
                                    <p>These Terms of Service, including any updates or amendments made by Afblock from time to time.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">"Stablecoin"</span>
                                    <p>A digital asset designed to maintain a stable value by reference to fiat currency and issued by a third party independent of Afblock.</p>
                                </li>
                                <li>
                                    <span className="font-semibold">"Fiat Currency"</span>
                                    <p>Government-issued legal tender, including but not limited to EUR, USD, or GBP.</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
