const fs = require('fs')

const path = 'E:/voyah-nuxt/data/site.ts'
let text = fs.readFileSync(path, 'utf8')

function replaceLineContains(anchor, replacement) {
  const lines = text.split(/\r?\n/)
  const index = lines.findIndex((line) => line.includes(anchor))
  if (index === -1) {
    console.log(`missing: ${anchor}`)
    return
  }

  lines[index] = replacement
  text = lines.join('\n')
}

replaceLineContains(
  "block('/static/assets/section3_2-4fb471c7.jpg'",
  "      block('/static/assets/section3_2-4fb471c7.jpg', 'Sincere reception', 'Accueil sincère', 'استقبال صادق', 'A dedicated one-to-one sales advisor helps each user clarify needs, understand product differences, and receive a calm premium introduction from the first touchpoint.', 'Un conseiller commercial dédié en tête-à-tête aide chaque utilisateur à clarifier ses besoins, à comprendre les différences entre les produits et à vivre un premier contact premium et apaisé.', 'يساعد مستشار مبيعات متخصص لكل عميل على توضيح الاحتياجات وفهم اختلافات المنتجات وتلقي تجربة تعريف فاخرة وهادئة منذ نقطة التواصل الأولى.'),"
)

replaceLineContains(
  "block('/static/assets/section3_3-20237755.jpg'",
  "      block('/static/assets/section3_3-20237755.jpg', 'Ceremonial delivery', 'Livraison cérémonielle', 'تسليم يحمل طابعاً احتفالياً', 'Delivery is designed not merely as handing over a vehicle, but as a complete ceremony in which details, explanation, and emotional value are all fully delivered.', 'La livraison n’est pas pensée comme une simple remise du véhicule, mais comme une cérémonie complète où les détails, les explications et la valeur émotionnelle sont pleinement transmis.', 'لا يُنظر إلى التسليم على أنه مجرد استلام للمركبة، بل كطقس كامل تُقدَّم فيه التفاصيل والشرح والقيمة الشعورية بصورة متكاملة.'),"
)

replaceLineContains(
  "block('/static/assets/section4_1-f7cf566b.jpg'",
  "      block('/static/assets/section4_1-f7cf566b.jpg', '7×24-hour protection', 'Protection 7×24 h', 'حماية على مدار 7×24 ساعة', 'All-day support, road assistance, and connected service resources stay available whenever users need them, helping each journey continue with confidence and peace of mind.', 'Une assistance permanente, le secours routier et les ressources de service connectées restent disponibles dès que l’utilisateur en a besoin, pour permettre à chaque trajet de se poursuivre avec confiance et sérénité.', 'يبقى الدعم المتواصل وخدمة المساعدة على الطريق وموارد الخدمة المتصلة متاحة متى احتاج إليها المستخدم، بما يساعد كل رحلة على الاستمرار بثقة وطمأنينة.')"
)

replaceLineContains(
  "block('/static/assets/charge_pc-1c0a2e91.png'",
  "      block('/static/assets/charge_pc-1c0a2e91.png', '168 energy solution', 'Solution énergétique 168', 'حل الطاقة 168', 'Integrated charging resources connect home charging, destination charging, and public charging scenes so that users can access one connected energy solution wherever they travel.', 'Les ressources de recharge intégrées relient la recharge à domicile, à destination et dans les réseaux publics afin d’offrir une solution énergétique connectée quel que soit le trajet.', 'تربط موارد الشحن المتكاملة بين الشحن المنزلي وشحن الوجهة والشحن العام لتوفير حل طاقة متصل للمستخدم أينما تحرك.'),"
)

replaceLineContains(
  "block('/static/assets/super_charge_pc-3886645d.png'",
  "      block('/static/assets/super_charge_pc-3886645d.png', 'Fast | The world’s first megawatt-level brand supercharger', 'Rapide | Le premier superchargeur de marque au niveau mégawatt au monde', 'سريع | أول شاحن فائق للعلامة التجارية بمستوى الميغاواط في العالم', 'High-power charging capability, rapid energy replenishment, and partner-network coverage reduce waiting time and improve the efficiency of long-distance travel.', 'La capacité de recharge haute puissance, la recharge rapide et la couverture des réseaux partenaires réduisent le temps d’attente et améliorent l’efficacité des longs trajets.', 'تقلل قدرة الشحن عالية الطاقة وسرعة استعادة الطاقة وتغطية الشبكات الشريكة زمن الانتظار وتعزز كفاءة الرحلات الطويلة.'),"
)

replaceLineContains(
  "block('/static/assets/V2G-cba13343.jpg'",
  "      block('/static/assets/V2G-cba13343.jpg', 'Smart | From “rapid full charge” to “seamless replenishment”', 'Intelligent | De la “recharge ultra-rapide” à la “recharge sans effort”', 'ذكي | من «شحن سريع بالكامل» إلى «تزوّد سلس بالطاقة»', 'Digital guidance, route intelligence, and connected charging information help turn charging from an isolated task into a visible and guided part of everyday ownership.', 'Le guidage numérique, l’intelligence d’itinéraire et les informations de recharge connectées transforment la recharge d’une opération isolée en une étape lisible et guidée de l’usage quotidien.', 'تساعد الإرشادات الرقمية وذكاء المسار ومعلومات الشحن المتصلة على تحويل الشحن من مهمة منفصلة إلى جزء واضح وموجَّه من تجربة الاستخدام اليومية.')"
)

replaceLineContains(
  "block('/static/assets/corporate_poster_1-c2c8c7ca.jpg'",
  "      block('/static/assets/corporate_poster_1-c2c8c7ca.jpg', 'Mission', 'Mission', 'المهمة', 'Voyah is committed to becoming a user-oriented technology company and a trusted Chinese premium intelligent new-energy vehicle brand.', 'Voyah s’engage à devenir une entreprise technologique orientée utilisateur et une marque chinoise premium de véhicules intelligents à énergie nouvelle digne de confiance.', 'تلتزم Voyah بأن تصبح شركة تكنولوجية موجهة نحو المستخدم وعلامة صينية راقية موثوقة للمركبات الذكية العاملة بالطاقة الجديدة.'),"
)

replaceLineContains(
  "block('/static/assets/corporate_poster_8-7da49d74.png'",
  "      block('/static/assets/corporate_poster_8-7da49d74.png', 'Vision', 'Vision', 'الرؤية', 'The brand pursues long-term premium development through technological innovation, product strength, and a clear user-value orientation.', 'La marque poursuit un développement premium de long terme par l’innovation technologique, la force produit et une orientation claire vers la valeur utilisateur.', 'تسعى العلامة إلى تطور فاخر طويل الأمد عبر الابتكار التقني وقوة المنتج والتمحور الواضح حول قيمة المستخدم.'),"
)

replaceLineContains(
  "block('/static/assets/corporate_poster_14-b8674e6c.png'",
  "      block('/static/assets/corporate_poster_14-b8674e6c.png', 'Values', 'Valeurs', 'القيم', 'Responsibility, sincerity, quality, and continuous refinement form the cultural basis for how Voyah develops products, serves users, and builds the brand.', 'Responsabilité, sincérité, qualité et amélioration continue constituent la base culturelle sur laquelle Voyah développe ses produits, sert ses utilisateurs et construit sa marque.', 'تشكل المسؤولية والإخلاص والجودة والتحسين المستمر الأساس الثقافي الذي تعتمد عليه Voyah في تطوير منتجاتها وخدمة مستخدميها وبناء علامتها.'),"
)

replaceLineContains(
  "block('/static/assets/recruit_poster_1-679c5306.png'",
  "      block('/static/assets/recruit_poster_1-679c5306.png', 'Open roles', 'Postes ouverts', 'الوظائف المفتوحة', 'Open positions span vehicle engineering, product planning, digital systems, user operations, and market development across the broader Voyah organization.', 'Les postes ouverts couvrent l’ingénierie véhicule, la planification produit, les systèmes numériques, les opérations utilisateurs et le développement du marché dans l’ensemble de l’organisation Voyah.', 'تمتد الوظائف المفتوحة عبر هندسة المركبات وتخطيط المنتجات والأنظمة الرقمية وعمليات المستخدمين وتطوير السوق ضمن منظومة Voyah الأوسع.'),"
)

replaceLineContains(
  "block('/static/assets/recruit_poster_2-7a882da6.png'",
  "      block('/static/assets/recruit_poster_2-7a882da6.png', 'Growth environment', 'Environnement de croissance', 'بيئة التطور', 'Voyah emphasizes responsibility, collaboration, craftsmanship, and product quality as the core environment for long-term career growth.', 'Voyah met l’accent sur la responsabilité, la collaboration, l’esprit de fabrication et la qualité produit comme environnement clé pour une évolution professionnelle durable.', 'تركز Voyah على المسؤولية والتعاون وروح الإتقان وجودة المنتج بوصفها البيئة الأساسية للنمو المهني طويل الأمد.'),"
)

replaceLineContains(
  "block('/static/assets/recruit_form_bg-107b0556.jpg'",
  "      block('/static/assets/recruit_form_bg-107b0556.jpg', 'Application channels', 'Canaux de candidature', 'قنوات التقديم', 'Recruitment channels are organized to make application, role matching, and entry communication clearer for prospective candidates.', 'Les canaux de recrutement sont organisés pour rendre plus clairs la candidature, l’adéquation du poste et la communication d’entrée pour les candidats potentiels.', 'نُظمت قنوات التوظيف لجعل التقديم ومواءمة الدور والتواصل الأولي أوضح للمرشحين المحتملين.'),"
)

replaceLineContains(
  "block('/static/assets/recruit_partners_poster_1-f48b5641.jpg'",
  "      block('/static/assets/recruit_partners_poster_1-f48b5641.jpg', 'Network development', 'Développement du réseau', 'تطوير الشبكة', 'Partner recruitment is positioned around long-term market development, regional coverage, and a consistent user experience across retail and service touchpoints.', 'Le recrutement de partenaires est pensé autour du développement de marché à long terme, de la couverture régionale et d’une expérience utilisateur cohérente à travers les points de vente et de service.', 'يتمحور استقطاب الشركاء حول تطوير السوق على المدى الطويل والتغطية الإقليمية وتقديم تجربة مستخدم متسقة عبر نقاط البيع والخدمة.'),"
)

replaceLineContains(
  "block('/static/assets/recruit_partners_poster_5-eff94200.png'",
  "      block('/static/assets/recruit_partners_poster_5-eff94200.png', 'Capability standards', 'Standards de capacité', 'معايير القدرة', 'Operational readiness, service capability, and premium brand presentation are the core standards in partner evaluation and onboarding.', 'La préparation opérationnelle, la capacité de service et la présentation premium de la marque constituent les principaux standards de l’évaluation et de l’intégration des partenaires.', 'تمثل الجاهزية التشغيلية والقدرة الخدمية وتقديم العلامة بصورة فاخرة المعايير الأساسية في تقييم الشركاء وضمهم.'),"
)

replaceLineContains(
  "block('/static/assets/recruit_partners_poster_9-c73e7510.jpg'",
  "      block('/static/assets/recruit_partners_poster_9-c73e7510.jpg', 'Shared growth', 'Croissance partagée', 'النمو المشترك', 'The cooperation model emphasizes durable capability building and shared growth rather than short-term channel expansion alone.', 'Le modèle de coopération privilégie la construction durable des capacités et la croissance partagée plutôt qu’une expansion de canal à court terme.', 'يركز نموذج التعاون على بناء القدرات بصورة مستدامة وتحقيق نمو مشترك بدلاً من الاكتفاء بتوسيع القنوات على المدى القصير.'),"
)

replaceLineContains(
  "block('/static/assets/prospectus-4ce8b045.png'",
  "      block('/static/assets/prospectus-4ce8b045.png', 'Company profile', 'Profil de l’entreprise', 'الملف التعريفي للشركة', 'Core company profile materials are organized for structured review so that investors can quickly understand the company, its positioning, and its strategic direction.', 'Les principaux documents de présentation de l’entreprise sont organisés pour une lecture structurée afin que les investisseurs comprennent rapidement la société, son positionnement et sa direction stratégique.', 'نُظمت مواد الملف التعريفي الأساسية بصورة منظمة كي يتمكن المستثمرون من فهم الشركة وتموضعها واتجاهها الاستراتيجي بسرعة.'),"
)

replaceLineContains(
  "block('/static/assets/corporate-governance-1d981bac.png'",
  "      block('/static/assets/corporate-governance-1d981bac.png', 'Governance structure', 'Structure de gouvernance', 'هيكل الحوكمة', 'Governance information clarifies the company’s institutional structure, oversight framework, and operating principles for long-term development.', 'Les informations de gouvernance clarifient la structure institutionnelle de l’entreprise, son cadre de supervision et ses principes de fonctionnement au service du développement de long terme.', 'توضح معلومات الحوكمة الهيكل المؤسسي للشركة وإطار الرقابة ومبادئ التشغيل الداعمة للتطور طويل المدى.'),"
)

replaceLineContains(
  "block('/static/assets/ir2-93691f3f.png'",
  "      block('/static/assets/ir2-93691f3f.png', 'Reference materials', 'Documents de référence', 'مواد مرجعية', 'Supporting materials provide additional context for financial review, governance understanding, and strategic reference.', 'Les documents complémentaires apportent un contexte additionnel pour l’analyse financière, la compréhension de la gouvernance et la référence stratégique.', 'توفر المواد الداعمة سياقاً إضافياً للمراجعة المالية وفهم الحوكمة والرجوع إلى التوجهات الاستراتيجية.'),"
)

replaceLineContains(
  "block('/static/assets/earth_index-e4c6ae99.jpg'",
  "      block('/static/assets/earth_index-e4c6ae99.jpg', 'Environmental disclosure information', 'Informations d’ordre environnemental', 'معلومات الإفصاح البيئي', 'This section centralizes the official environmental disclosure information released by Voyah for public reference and review.', 'Cette section centralise les informations officielles d’ordre environnemental publiées par Voyah pour la consultation publique.', 'يعمل هذا القسم على تجميع معلومات الإفصاح البيئي الرسمية الصادرة عن Voyah لغايات المراجعة والاطلاع العام.'),"
)

replaceLineContains(
  "block('/static/assets/power_bg1-7048cd30.png'",
  "      block('/static/assets/power_bg1-7048cd30.png', 'Operational responsibility', 'Responsabilité opérationnelle', 'المسؤولية التشغيلية', 'Environmental disclosure reflects the company’s operational responsibility and its commitment to compliant, transparent, and sustainable development.', 'Les informations environnementales reflètent la responsabilité opérationnelle de l’entreprise et son engagement en faveur d’un développement conforme, transparent et durable.', 'يعكس الإفصاح البيئي المسؤولية التشغيلية للشركة والتزامها بالتطور المتوافق والشفاف والمستدام.'),"
)

replaceLineContains(
  "block('/static/assets/world-6e618fb7.png'",
  "      block('/static/assets/world-6e618fb7.png', 'Long-term orientation', 'Orientation de long terme', 'التوجه طويل المدى', 'The disclosure framework emphasizes sustainable operation, ongoing management, and long-term environmental accountability.', 'Le cadre de divulgation met l’accent sur une exploitation durable, une gestion continue et une responsabilité environnementale de long terme.', 'يركز إطار الإفصاح على التشغيل المستدام والإدارة المستمرة والمساءلة البيئية طويلة الأجل.')"
)

replaceLineContains(
  "block('/static/assets/user_manual-4441c1d3.png'",
  "      block('/static/assets/user_manual-4441c1d3.png', 'User manuals', 'Manuels utilisateur', 'أدلة المستخدم', 'Vehicle user manuals and owner documents are organized to support onboarding, daily use, and continued ownership reference.', 'Les manuels utilisateur et documents propriétaires des véhicules sont organisés pour accompagner la prise en main, l’usage quotidien et la consultation continue pendant la possession.', 'تم تنظيم أدلة المستخدم ووثائق المالك الخاصة بالمركبات لدعم البدء في الاستخدام والاستعمال اليومي والرجوع إليها أثناء فترة الملكية.'),"
)

replaceLineContains(
  "block('/static/assets/prospectus2-00a82650.png'",
  "      block('/static/assets/prospectus2-00a82650.png', 'Reference files', 'Fichiers de référence', 'ملفات مرجعية', 'Supplementary reference files are grouped to make searching, downloading, and document comparison clearer and more efficient.', 'Les fichiers de référence complémentaires sont regroupés afin de rendre la recherche, le téléchargement et la comparaison des documents plus clairs et plus efficaces.', 'جُمعت الملفات المرجعية الإضافية لجعل البحث والتنزيل ومقارنة المستندات أوضح وأكثر كفاءة.'),"
)

replaceLineContains(
  "block('/static/assets/app_code_160-5b2a34cc.png'",
  "      block('/static/assets/app_code_160-5b2a34cc.png', 'Digital access', 'Accès numérique', 'الوصول الرقمي', 'Document access is connected to digital touchpoints so that official materials can be retrieved conveniently and consistently.', 'L’accès aux documents est relié aux points de contact numériques afin que les supports officiels puissent être retrouvés de manière pratique et cohérente.', 'يرتبط الوصول إلى المستندات بنقاط الوصول الرقمية بحيث يمكن استرجاع المواد الرسمية بسهولة وبصورة متسقة.'),"
)

replaceLineContains(
  "block('/static/assets/partner_pc-b12d249b.png'",
  "      block('/static/assets/partner_pc-b12d249b.png', 'Supplier network', 'Réseau fournisseurs', 'شبكة الموردين', 'Supplier collaboration is built around shared quality standards, industrial coordination, and transparent information disclosure.', 'La collaboration avec les fournisseurs repose sur des standards qualité communs, une coordination industrielle solide et une information transparente.', 'يقوم التعاون مع الموردين على معايير جودة مشتركة وتنسيق صناعي قوي وإفصاح معلوماتي شفاف.'),"
)

replaceLineContains(
  "block('/static/assets/charge_pile_bg-2c7b414e.png'",
  "      block('/static/assets/charge_pile_bg-2c7b414e.png', 'Capability alignment', 'Alignement des capacités', 'مواءمة القدرات', 'The procurement model values consistency, delivery reliability, process clarity, and structured long-term cooperation.', 'Le modèle d’achats valorise la constance, la fiabilité d’exécution, la clarté des processus et une coopération structurée sur le long terme.', 'يقدّر نموذج المشتريات الاتساق وموثوقية التنفيذ ووضوح العمليات والتعاون المنظم طويل الأمد.'),"
)

replaceLineContains(
  "block('/static/assets/power_bg2-a6639f1e.png'",
  "      block('/static/assets/power_bg2-a6639f1e.png', 'Long-term development', 'Développement de long terme', 'التطور طويل المدى', 'Partnerships are understood as durable capability building and continuous improvement rather than short-term transactional sourcing alone.', 'Les partenariats sont envisagés comme une construction durable des capacités et une amélioration continue, et non comme un simple sourcing transactionnel à court terme.', 'تُفهم الشراكات على أنها بناء مستدام للقدرات وتحسين مستمر لا مجرد توريد تعاقدي قصير الأجل.'),"
)

replaceLineContains(
  "block('/static/assets/drive2-aa10c694.png'",
  "      block('/static/assets/drive2-aa10c694.png', 'Guided selection', 'Choix guidé', 'اختيار موجّه', 'Prospective owners can narrow the lineup according to usage needs, size preference, and product character before scheduling an in-person drive.', 'Les futurs clients peuvent affiner la gamme selon les besoins d’usage, les préférences d’espace et le caractère du produit avant de programmer un essai en magasin.', 'يمكن للعملاء المحتملين تضييق الاختيار بحسب احتياجات الاستخدام وتفضيلات الحجم وطابع المنتج قبل تحديد موعد تجربة القيادة في المعرض.'),"
)

replaceLineContains(
  "block('/static/assets/store3-fe6e8d7d.jpg'",
  "      block('/static/assets/store3-fe6e8d7d.jpg', 'Store coordination', 'Coordination en magasin', 'تنسيق المعرض', 'The booking flow connects directly to the physical store network so that consultation, arrival planning, and drive preparation stay within one smooth process.', 'Le parcours de réservation se connecte directement au réseau de magasins afin que le conseil, la préparation de la visite et l’organisation de l’essai restent dans un processus fluide unique.', 'يرتبط مسار الحجز مباشرة بشبكة المعارض الفعلية حتى تظل الاستشارة والتخطيط للزيارة وتجهيز تجربة القيادة ضمن عملية سلسة واحدة.'),"
)

replaceLineContains(
  "block('/static/assets/life_center_poster-fb653778.png'",
  "      block('/static/assets/life_center_poster-fb653778.png', 'Ownership onboarding', 'Découverte de la possession', 'تهيئة الملكية', 'A test drive supports not only product discovery but also a clearer understanding of the full ownership journey and service experience.', 'L’essai sert non seulement à découvrir le produit, mais aussi à mieux comprendre le parcours de possession complet et l’expérience de service.', 'لا تخدم تجربة القيادة اكتشاف المنتج فقط، بل تساعد أيضاً على فهم أوضح لرحلة الملكية الكاملة وتجربة الخدمة.'),"
)

replaceLineContains(
  "summary: t('View official environmental disclosure information",
  "    summary: t('View official environmental disclosure information released by Voyah.', 'Consultez les informations officielles d’ordre environnemental publiées par Voyah.', 'اطلع على معلومات الإفصاح البيئي الرسمية الصادرة عن Voyah.'),"
)

replaceLineContains(
  "summary: t('Download official reference documents",
  "    summary: t('Download official reference documents, manuals, and related materials released by Voyah.', 'Téléchargez les documents de référence, manuels et matériaux associés publiés officiellement par Voyah.', 'قم بتنزيل المستندات المرجعية والأدلة والمواد المرتبطة الصادرة رسمياً عن Voyah.'),"
)

fs.writeFileSync(path, text, 'utf8')
console.log('fixed unicode lines')
