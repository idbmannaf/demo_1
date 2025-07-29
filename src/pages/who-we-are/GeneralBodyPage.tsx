import { motion } from 'framer-motion';
import React from 'react';
import PageHeader from '../../components/UI/PageHeader';

const GeneralBodyPage: React.FC = () => {
    const generalBodyMembers = [
        {
            name: "Faruque Ahmed",
            position: "Chairperson, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/files/1/Faruque Ahmed new_RDRS Board Member (1).jpg",
            details: "Faruque Ahmed has long experience in the development field. He was the Executive Director of BRAC International before joining RDRS' Board. Mr. Ahmed also served in the World Bank office in Dhaka. He was also a member of various professional groups for instance the World Bank Civil Society Consultative Group on Health, World Health Organization strategic and advisory group on Tuberculosis. He was on the board of GAVI Alliance, Geneva. Currently, he is a board member of Social Marketing Company Enterprise and working as one of the members of the Bangladesh Health Watch Working Group. Mr. Ahmed has publications on public health related issues in various journals and books. Faruque Ahmed has been associated with RDRS Trustee Board since 16 March 2020.",
            education: "Mr. Ahmed has a Masters in Economics from Dhaka University. He has another Masters in Health Sciences from Johns Hopkins University, USA."
        },
        {
            name: "Dr. S. M. Akbar",
            position: "Treasurer, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/S.M.Akbar-Photo.jpg",
            details: "Dr. S. M. Akbar has over 40 years of experience at various levels with different international banks and joint venture financial institutions in different countries of Asia and Europe. He attended international management training programme on different areas of Banking and Finance. He had demonstrated remarkable skills in turning around sick enterprises. He has also gained field level experience in managing operations of small and medium micro finance organisations of Bangladesh.",
            achievements: "Dr. Akbar has been awarded by different organisations for his outstanding management contribution in banking, including Gold medal for outstanding contribution in investment banking. He was member of various chambers of commerce and trade bodies including Foreign Investors Chambers of Commerce and Federation of Bangladesh Chamber of Commerce & Industries. He is also member of various social and voluntary organisations including Red Cross, Anjuman Mafidul Islam and Mother & Child Hospital.",
            education: "Dr. Akbar achieved an MBA from UK and a PhD from USA."
        },
        {
            name: "Professor M. Moynul Haque PhD",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Moynul-Haque-27.08.2018.jpg",
            details: "Prof. Dr. M. Moynul Haque has more than 39 years experiences in the field of education and research. Currently, he is serving in the Department of Agronomy, Bangabandhu Sheikh Mujibur Rahman Agricultural University (BSMRAU), Gazipur. He also served as Dean (Faculty of Agriculture), Registrar, Director (Planning and Development), Director (Outreach Program), Director (Transport), Additional Director (Institutional Quality Assurance Cell), Head of the Department and Syndicate Member of the university.",
            achievements: "Professor Haque was awarded certificate of scientific achievement by BARI-ACIAR in recognition of his outstanding contribution to research and development of pulses. He also developed 10 high yielding varieties of different crops popularly cultivated in the country. He supervised 45 MS and PhD students and published 145 research articles in different national and international journals. Professor Haque has been associated with RDRS Trustee Board since 16 April 2016.",
            education: "Professor Haque has MS and PhD degree in Agronomy. He is also fellow of different international institutions including IRRI, Philippines; Asian Vegetable Research and Development Centre, Taiwan; Chinese Academy of Agricultural Sciences; Danish Plant Directorate, Denmark; Indian Agricultural Research Institute, Delhi and MTC Global, Bangalore, India."
        },
        {
            name: "Philip Biswas",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Philip-Biswas.jpg",
            details: "Philip Biswas has specialization in organization Development & Management, Microfinance Operation & Management, and Children Scholarship Program. He is Founder Executive Director of Rural Reconstruction Foundation (RRF). He has served as member of Board and Executive Committee of different national and international forums and organizations. Mr. Philip has joined in RDRS General Board on 23 December 2019.",
            education: "Philip Biswas has Bachelor Degree in Arts from Notre Dame College, Dhaka. He has also a Diploma in Development Studies from Coady International Institute, St. Francis Xavier University, Canada."
        },
        {
            name: "Shabbir Ahmed Chowdhury",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Shabbir-Ahmed-Chowdhury_GB.jpg",
            details: "Shabbir Ahmed Chowdhury is the Honorary Advisor of the Institute for Inclusive Finance and Development (InM). He has a long professional career in the field of Development. Mr Chowdhury has started his career with BRAC as a field worker in 1976 and became Director BRAC Microfinance Programme, Training Programme, and later BRAC International Programme.",
            achievements: "Mr. Chowdhury was awarded Honorary Citizenship by the Municipality of General Trias, Cavite, Peoples Republic of Philippines. Professional member of the Microfinance Network (MFN), Mexico 2006-2009, General Body member of InM from 2019-2020, Lifelong member of Dhaka University Alumni Association, General Board Member of Association of Land Reform and Development (ALRD), Association for Realisation of Basic Needs-ARBAN and Uddipan.",
            education: "Mr. Chowdhury has a Master's degree in Economics from the University of Dhaka and another M.A. in Development Studies from the Institute of Social Studies, The Hague, The Netherlands. He was awarded a certificate on Strategic Leadership for Microfinance from Harvard Business School, USA. Awarded certificate on Boulder Microfinance Training, Naropa University, USA organised by CGAP, World Bank. Awarded certificate on Micro Banking Internal Control Practices, in Jakarta, Indonesia organised by the Bank Rakyat Indonesia."
        },
        {
            name: "Shib Narayan Kairy",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/PP Photo SN Kairy.jpg",
            details: "Shib Narayan Kairy has been associated with RDRS Trustee Board since 2006 and currently playing the role of the Chairperson. He started his career in BRAC and served in various important positions. After retirement from BRAC, Mr. Kairy joined BRAC University as a Treasurer and served in this position until March 2020. Mr. Kairy joined Sajida foundation in April 2020 as a Senior Advisor.",
            achievements: "Mr. Kairy is currently serving as the Chairperson of INAFI, Vice President of GHASFUL, Chairman of Dhaka Handicrafts. He has a number of articles published in national newspapers and he is also the co-writer of the book titled \"Driving Development: A story of BRAC's Evolution and Effectiveness\".",
            education: "Mr. Kairy did his Master's in Accounting from Dhaka University."
        },
        {
            name: "Prof. Md. Nazmul Islam",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Prof-Dr.-Nazmul-Islam-27.08.2018-831x1024.jpg",
            details: "Prof. Md. Nazmul Islam started his career in the government service as a physician and became a professor in 1994. He retired in 2007 as a Professor of Medical College after 27 years of his service with the government. As a teacher, he has been trained in Medical education both within and outside the country including UK and has to his credit in piloting the existing undergraduate Medical Curriculum in different Medical Colleges since 1998 funded by DFID and British Council.",
            achievements: "He is an executive member of Bangladesh Ophthalmological Society, Bangladesh Uvea Society, Bangladesh Community Ophthalmology Society, Bangladesh Cataract and Refractive Society, and National Council for Prevention of Blindness in Bangladesh. He attended almost all the Ophthalmic Conferences in the country and many regional and International conferences and regularly participating in APAO conferences. Prof. Islam has been associated with RDRS Trustee Board since 26 November 2011.",
            education: "During this long period of service he had several publications and has contributed in developing treatment protocols for General and Ophthalmic practitioners. He is the recipient of Life time achievement award from Ophthalmological Society and Distinguished Service award from Asia Pacific Academy of Ophthalmology. Mr. Islam completed his graduation (MBBS) from Rajshahi Medical College in 1973. He did his post graduation in Ophthalmology from the Institute of Postgraduate Medicine and Research, Dhaka in 1980."
        },
        {
            name: "Rasheda K. Choudhury",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Rasheda-K-Choudhury-27.08.2018.jpg",
            details: "Rasheda K. Choudhury is the Executive Director of Campaign for Popular Education (CAMPE), the national coalition of more than a thousand NGOs and educator groups working for promoting quality education for all. She is the Member Secretary of Education Watch and the Co-Founder of the Global Campaign for Education (GCE), a civil society movement working to help governments and other stakeholders to end the global education crisis, operating in more than 100 countries.",
            achievements: "Ms. Choudhury is currently a member of the Consultative/Expert Group of the External Resources Division (ERD) of the Government of Bangladesh which has been working on integrating population and development issues into plans and policies. Ms Choudhury has been associated with RDRS Trustee Board since 16 June 1997. Rasheda K. Choudhury was Adviser (De-facto Cabinet Minister) to the Interim Non-party Caretaker Government of Bangladesh in 2008 which conducted the Parliamentary Election and handed over power to the elected government in January 2009. As the Adviser she served in three ministries that include Ministry of Primary and Mass Education; Ministry of Women and Children Affairs; and Ministry of Cultural Affairs.",
            education: "She regularly writes in national newspapers on development issues particularly on the right to education, gender justice and inclusive development. Rasheda K. Choudhury has a Master's in English from Dhaka University."
        },
        {
            name: "Anna Minj",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Anna-Minj_.jpg",
            details: "Anna Minj is a seasoned professional in the development sector with extensive ground-level experience in leading multi-sectoral program planning and management. She specializes in poverty reduction, integrated holistic development, women's empowerment, livelihood security, ultra-poor graduation, gender equality mainstreaming, and Indigenous people's rights.",
            achievements: "She has held senior positions at prestigious national and international organizations, including CARITAS, CARE Bangladesh, and BRAC, the world's largest development organization. She excels in leading diverse teams and has actively participated in numerous national and international forums. She is the Chairperson of the National Coalition of Indigenous Peoples in Bangladesh, Vice-Chair of SIL International Bangladesh, and an executive board member of several development organizations.",
            education: "Currently, she is the Director of Programmes at BRAC International, an organization operating in 14 countries across Asia and Africa. BRAC International implements a wide range of programmes focused on education, health, youth empowerment, ultra-poor graduation, early childhood development, agriculture food security, and climate change. She holds a postgraduate degree in Project Planning and Management from the University of Manchester, UK, and an MSc in Zoology/Fisheries from Jagannath University, Bangladesh."
        },
        {
            name: "Samia Huq, Ph.D",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Samia-Huq.jpg",
            details: "Samia Huq is currently serving as Dean of General Education and Professor of Anthropology in BRAC University. She has long experience in making experimental learning and civic engagement as integral part of general education. She has also research interest in religious education, gender development and minority rights. She has joined in RDRS General Board on 6 February 2022.",
            education: "Samia Huq has a Master Degree and Ph.D in Anthropology from Brandeis University, Waltham, MA, USA."
        },
        {
            name: "Md. Abdus Sattar Sarker FCA, FCMA",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/ABDUS-SATTER-SARKAR.jpg",
            details: "Md. Abdus Sattar Sarker is Principal & CEO of A.S. Sarker & Co., Cost and Management Accountants. He is also Partner of Mahfel & Co., Chartered Accountants, an independent member firm of AGN International. He has served in BRAC as the Head of Finance. He has also been engaged in different committees and boards as a valuable member. Mr Sarker joined in RDRS General Board on 23 December 2019.",
            education: "Md. Abdus Sattar Sarker has Master Degree in Commerce (Accounting) from University of Dhaka. He is a fellow member of ICMAB (Institute of Cost and Management Accountants of Bangladesh); and ICAB (Institute of Chartered Accountants of Bangladesh)."
        },
        {
            name: "Prof. Dr. Mojib Uddin Ahmed",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Mojib-Uddin.jpg",
            details: "Dr. Mojib Uddin Ahmed is Professor of Department of Tourism and Hospitality Management, University of Dhaka. He is also serving as an Adjunct Professor in Department of Business Administration, Daffodil University.",
            education: "Dr. Ahmed has Master Degree in Commerce from University of Dhaka. He also has Master in Accounting from University of Glasgow, UK; and Master in Accounting Science from University of Illinois, USA. He has Ph.D from Old Dominion, Verginia, USA. Professor Dr. Mojib Uddin Ahmed has joined in RDRS General Board on 23 December 2019."
        },
        {
            name: "Ahmed Ataul Hakeem FCMA",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Ataul-Hakeem.jpg",
            details: "Ahmed Ataul Hakeem started his career as a part-time lecturer in ICMAB, of which he is a fellow. Later on, Mr Hakeem continued his career in various significant positions in different department such as Comptroller and Auditor General of Bangladesh, Controller General Defence Finance (Grade-1), Director General of Civil Audit Directorate, Director General of Financial Management Academy, Director General of Mission Audit Directorate, Deputy Secretary/Director of Finance Division in Ministry of Finance. He has also been part of international audit team. Mr Hakeem joined in RDRS General Board on 23 December 2019.",
            education: "Ahmed Ataul Hakeem has Master in Social Science Degree in Development Finance from University of Birmingham, England. He has also a Master Degree in Economics from University of Dhaka, and Associate Cost and Management Accountant from ICMAB."
        },
        {
            name: "Sumaiya Khair Ph.D.",
            position: "Member, General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Sumaiya Khair 27.08.2018.jpg",
            details: "Sumaiya Khair is a Professor of Law Department, University of Dhaka, Bangladesh. She served as the Deputy Executive Director at Transparency International Bangladesh (TIB). Currently, in addition to her academic responsibilities at the University, she is serving TIB as Adviser, Executive Management where she provides strategic guidance in the overall management and implementation of TIB's activities.",
            achievements: "Professor Khair is on the Editorial Board of the Asian Yearbook of International Law of the Foundation for the Development of International Law in Asia (DILA). She was Head of Research and Policy Influence from 2012 to 2013 in a DFID-funded program on Community Legal Services implemented by Maxwell Stamp PLC. She sits on governing boards of a number of research and development organizations. Prof. Khair has been associated with RDRS Trustee Board since 18 October 2008.",
            education: "Professor Khair writes on law, justice, human rights and governance and has to her credit a number of articles and publications in both national and international journals and books. She has consulted for UN agencies, ILO and international development partners in the areas of her expertise. Professor Khair has a PhD from UK where she also studied as a Commonwealth Post-Doctoral Academic Fellow."
        },
        {
            name: "Parveen Mahmud FCA",
            position: "General Body, RDRS Bangladesh",
            image: "https://www.rdrsbangladesh.org/storage/photos/1/General Body/Parveen-Mahmud-FCA-27.08.2018.jpg",
            details: "Ms Parveen Mahmud is the Chairperson of RDRS Bangladesh and has been associated with RDRS Trustee Board since 26 April 2014. She is the First among many Firsts. She is the first woman President and 39th President of the Institute of Chartered Accountants of Bangladesh (ICAB) in 2011. She was the first female board member and the first female President among professional bodies of the South Asian Federation of Accountants (SAFA) till now.",
            achievements: "She was the Founding Chairperson of CA Female Forum- Women in Leadership Committee, ICAB in 2017 and was the founding Vice Chairperson of the Women in Leadership Committee of SAFA till 2019. Ms. Mahmud started her career with BRAC and later served BRAC International Board and Chaired Audit and Risk Committee since 2011- 2022. She was Partner, ACNABIN & Co., Chartered Accountants, and was the Founding Managing Director of the Grameen Telecom Trust.",
            education: "She sits in numerous Boards including Transparency International Bangladesh (TIB), Centre for Policy Dialogue (CPD), Bishsho Shahitto Kendro (BSK), Manusher Jonnyo Foundation (MJF), PKSF, Ghashful, Friendship, HerStory Foundation, CholPori, Moner Bondhu, Heroes for All, Cider International School, Chittagong. She is the Independent Director of Marico Bangladesh, Apex Footwear Ltd. and Berger Paints Bangladesh Ltd. She was the Chairperson, Shasha Denims Ltd., UCEP – Bangladesh, MIDAS, Acid Survivor's Foundation. Ms Mahmud served as a member of the National Advisory Panel for SME Development of Bangladesh, and was a Founding Board Member of SME Foundation and founding Convener, SME Women's Forum. Ms. Mahmud was a Working Group Member of the Consultative Group on Social Indicators of UNCTAD/ISAR. She is a Melvin Jones Fellow. She was the President, Lions Club of Chittagong Parijat Elite, Lions Clubs International, District 315- B4, Bangladesh and now serving as District Cabinet Treasurer 2022-2023. She has received few accolades for her services and contribution to the society."
        },
        {
            name: "Zahida Ispahani",
            position: "General Body, RDRS Bangladesh",
            image: "https://rdrsbangladesh.org/storage/photos/1/General Body/Zahida Ispahani_TBGB.jpg",
            details: "Zahida Ispahani is the Director of M. M. Ispahani Limited, Ispahani Tea Limited, ISPI Securities Limited, The Free School Street Property Limited, ISPI Travels Limited, and Financial Express. She is the Chairman of A.B. Ispahani Securities Limited, and MIDAS Limited. She is an honorary Adviser of the Ispahani Islamia Eye Institute and Hospital since 2001. She served as a Secretary at United Nations Women's Association in Bangladesh. She was the Founder Secretary and President for two terms at the SAARC Women Association in Bangladesh.",
            achievements: "She is a Philanthropist, serving several orphanages, social and community trusts, and organisations.",
            education: "Zahida Ispahani is a graduate in Economics from the University of Punjab, Pakistan."
        },
        {
            name: "Hasin Jahan",
            position: "General Body, RDRS Bangladesh",
            image: "https://rdrsbangladesh.org/storage/photos/1/General Body/Hasin Jahan_GB.jpg",
            details: "Hasin Jahan is a development professional with specialised work experience in water, sanitation, hygiene, waste management, disaster risk reduction, agriculture and humanitarian response. She has a proven track record of providing strategic leadership with a unique blend of programme development, large scale implementation and advocacy at national level.",
            achievements: "She has notable experience of leading innovation especially in geographically and technically challenged areas and mainstreaming gender and equity. She is recognized as an influential WASH leader who promotes gender equality and youth empowerment as underlying solutions for sustainable development. She has a particular interest in using ICT based platforms and communication campaigns to address social problems. She has dynamic leadership quality and led country strategy development process both in WaterAid and Practical Action. She is a TEDx speaker.",
            education: "Hasin Jahan completed BSc Engineering (Civil) from Bangladesh University of Engineering & Technology (BUET), Bangladesh. She has a Master Degree in Science (Water & Environmental Management) from Water, Engineering and Development Centre (WEDC), Loughborough University of Technology, UK. She also has Post Graduate Diploma in Disaster Risk Management from Institute of Disaster Management and Vulnerability Studies, University of Dhaka."
        }
    ];

    return (
        <div className="pt-20">
            <PageHeader
                title="General Body"
                subtitle="Our Distinguished Members"
                breadcrumbs={[
                    { name: 'General Body' }
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Distinguished General Body Members</h2>
                    <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
                        The General Body of RDRS Bangladesh represents the broader community and stakeholders who support our mission.
                        Our members bring diverse expertise and experience to guide our mission and programs.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {generalBodyMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-start ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                                }`}
                        >
                            {/* Image Column */}
                            <div className={`lg:col-span-1 ${index % 2 === 0 ? '' : 'lg:col-start-3'}`}>
                                <div className="sticky top-24">
                                    <motion.div
                                        className={`bg-gradient-to-br p-8 rounded-2xl border shadow-xl ${index % 2 === 0
                                            ? 'from-purple-50 to-pink-50 border-purple-100'
                                            : 'from-orange-50 to-yellow-50 border-orange-100'
                                            }`}
                                        whileHover={{
                                            scale: 1.05,
                                            rotateY: 5,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.2,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            className="relative"
                                        >
                                            <img
                                                src={member.image}
                                                alt={`${member.name} - ${member.position}`}
                                                className="w-full h-auto rounded-xl shadow-2xl"
                                            />

                                            {/* Decorative overlay */}
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-t rounded-xl ${index % 2 === 0
                                                    ? 'from-purple-600/20 to-transparent'
                                                    : 'from-orange-600/20 to-transparent'
                                                    }`}
                                                animate={{
                                                    opacity: [0.3, 0.6, 0.3],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            ></motion.div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                            className="mt-6 text-center"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                            <p className={`font-semibold ${index % 2 === 0 ? 'text-purple-600' : 'text-orange-600'
                                                }`}>{member.position}</p>
                                            <motion.div
                                                className={`mt-4 w-16 h-1 rounded-full mx-auto ${index % 2 === 0 ? 'bg-purple-500' : 'bg-orange-500'
                                                    }`}
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            ></motion.div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className={`lg:col-span-2 ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                                <div className="prose prose-lg max-w-none">
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.3,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        className="mb-6"
                                    >
                                        <motion.p
                                            className="text-lg text-gray-600 leading-relaxed mb-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                        >
                                            {member.details}
                                        </motion.p>

                                        {member.achievements && (
                                            <motion.div
                                                className={`bg-gradient-to-r p-6 rounded-xl border mb-6 ${index % 2 === 0
                                                    ? 'from-purple-50 to-pink-50 border-purple-100'
                                                    : 'from-orange-50 to-yellow-50 border-orange-100'
                                                    }`}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                                whileHover={{
                                                    scale: 1.02,
                                                    transition: { duration: 0.2 }
                                                }}
                                            >
                                                <p className="text-lg text-gray-600 leading-relaxed">
                                                    {member.achievements}
                                                </p>
                                            </motion.div>
                                        )}

                                        <motion.div
                                            className={`border-l-4 p-6 rounded-r-xl ${index % 2 === 0
                                                ? 'bg-purple-50 border-purple-500'
                                                : 'bg-orange-50 border-orange-500'
                                                }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.7 }}
                                            whileHover={{
                                                x: 10,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Education & Qualifications</h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                {member.education}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeneralBodyPage; 