// 多语言翻译对象
const translations = {
    zh: {
        // 导航栏
        'nav.work': '作品',
        'nav.about': '关于',
        'nav.contact': '联系',
        
        // 首页
        'home.subtitle': 'UI/UX 设计师 & 产品策略师',
        'home.title': '创造有价值的数字体验',
        'home.description': '我设计直观的数字产品，解决真实的用户问题。拥有5年以上的经验，专精于用户中心设计、原型设计和设计系统，服务过初创企业和科技公司。',
        'home.viewWork': '查看作品',
        'home.getInTouch': '联系我',
        'home.selectedProjects': '精选项目',
        'home.projectSubtitle': '近期UI/UX设计项目精选',
        
        // 作品分类
        'filter.all': '全部',
        'filter.mobile': '移动应用',
        'filter.web': '网页设计',
        'filter.dashboard': '仪表板',
        
        // 项目1
        'project1.category': '移动应用',
        'project1.title': '银行应用重新设计',
        'project1.description': '为千禧一代用户重新设计移动银行应用，专注于提升财务素养和交易清晰度。',
        'project1.link': '查看案例研究 →',
        
        // 项目2
        'project2.category': '网页设计',
        'project2.title': '电商用户体验优化',
        'project2.description': '为在线零售商重新设计用户体验，转化率提升34%，结账流程得到改善。',
        'project2.link': '查看案例研究 →',
        
        // 项目3
        'project3.category': '仪表板',
        'project3.title': '数据可视化仪表板',
        'project3.description': '为SaaS公司设计直观的分析仪表板，实时跟踪KPI和用户参与度指标。',
        'project3.link': '查看案例研究 →',
        
        // 页脚
        'footer.name': '邹智文',
        'footer.title': '专注于创造以人为本的数字产品，解决实际问题。',
        'footer.quickLinks': '快速链接',
        'footer.getInTouch': '联系我',
        'footer.location': '📍 深圳，中国',
        'footer.email': '13670282592@163.com',
        'footer.phone': '+86 136 7028 2592',
        'footer.copyright': '© 2024 邹智文. 保留所有权利。',
        
        // 关于页面
        'about.title': '关于我',
        'about.subtitle': '设计师、问题解决者、用户中心设计的倡导者',
        'about.greeting': '你好，我是智文',
        'about.description1': '我是一名产品设计师，热衷于创造有意义的数字体验。我的方法结合了用户研究、直观的界面和商业策略，提供人们喜欢使用的产品。',
        'about.description2': '我曾与金融科技、电子商务和SaaS行业的科技初创公司和成熟企业合作。我相信好的设计是无形的——它只是有效。',
        'about.description3': '当我不在设计的时候，你可以在山里徒步旅行、阅读设计书籍，或者尝试新的设计工具和技术。',
        'about.experience': '工作经历',
        'about.skills': '软件技能',
        'about.contact': '联系方式',
        
        // 工作经历1
        'exp1.date': '2022-至今',
        'exp1.title': '高级UI/UX设计师',
        'exp1.company': '腾讯科技',
        'exp1.description': '负责公司核心产品的用户体验设计，领导设计团队，建立设计系统。',
        
        // 工作经历2
        'exp2.date': '2020-2022',
        'exp2.title': 'UI设计师',
        'exp2.company': '字节跳动',
        'exp2.description': '参与多个移动应用的设计，专注于界面美学和用户体验优化。',
        
        // 工作经历3
        'exp3.date': '2019-2020',
        'exp3.title': '视觉设计师',
        'exp3.company': '阿里巴巴',
        'exp3.description': '负责品牌视觉设计和营销材料的制作，参与电商平台界面设计。',
        
        // 技能名称
        'skill.figma': 'Figma',
        'skill.sketch': 'Sketch',
        'skill.ps': 'Adobe Photoshop',
        'skill.ai': 'Adobe Illustrator',
        'skill.ae': 'After Effects',
        'skill.blender': 'Blender',
        'skill.cdr': 'CorelDRAW',
        
        // 联系信息
        'contact.phone': '电话',
        'contact.email': '邮箱',
        'contact.email2': '备用邮箱',
        
        // 作品页面
        'work.title': '所有项目',
        'work.subtitle': '涵盖各个行业和平台的UI/UX设计作品全集',
        'work.branding': '品牌设计',
        'work.backToHome': '← 返回首页',
        
        // 项目4
        'project4.category': '移动应用',
        'project4.title': '个性化健身应用',
        'project4.description': '设计了一款健身应用，根据用户目标、健身水平和可用设备创建个性化训练计划。',
        
        // 项目5
        'project5.category': '网页设计',
        'project5.title': '旅游预订平台',
        'project5.description': '为旅游预订网站重新设计用户流程，简化航班和住宿的搜索和预订过程。',
        
        // 项目6
        'project6.category': '品牌设计',
        'project6.title': '科技初创公司品牌识别',
        'project6.description': '为B2B SaaS初创公司开发了完整的品牌识别，包括标志、色彩系统、字体和品牌指南。',
        
        // 案例研究页按钮
        'case.back': '← 返回所有项目'
    },
    en: {
        // 导航栏
        'nav.work': 'Work',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // 首页
        'home.subtitle': 'UI/UX Designer & Product Strategist',
        'home.title': 'Creating Digital Experiences That Matter',
        'home.description': 'I design intuitive digital products that solve real user problems. With 5+ years of experience, I specialize in user-centered design, prototyping, and design systems for startups and tech companies.',
        'home.viewWork': 'View My Work',
        'home.getInTouch': 'Get In Touch',
        'home.selectedProjects': 'Selected Projects',
        'home.projectSubtitle': 'A curated selection of my recent UI/UX design projects',
        
        // 作品分类
        'filter.all': 'All',
        'filter.mobile': 'Mobile App',
        'filter.web': 'Web Design',
        'filter.dashboard': 'Dashboard',
        
        // 项目1
        'project1.category': 'Mobile App',
        'project1.title': 'Banking App Redesign',
        'project1.description': 'Complete redesign of a mobile banking application focused on improving financial literacy and transaction clarity for millennials.',
        'project1.link': 'View Case Study →',
        
        // 项目2
        'project2.category': 'Web Design',
        'project2.title': 'E-commerce UX Optimization',
        'project2.description': 'User experience redesign for an online retailer, resulting in 34% increase in conversion rate and improved checkout flow.',
        'project2.link': 'View Case Study →',
        
        // 项目3
        'project3.category': 'Dashboard',
        'project3.title': 'Data Visualization Dashboard',
        'project3.description': 'Designed an intuitive analytics dashboard for SaaS companies to track KPIs and user engagement metrics in real-time.',
        'project3.link': 'View Case Study →',
        
        // 页脚
        'footer.name': 'Zhiwen Zou',
        'footer.title': 'UI/UX Designer focused on creating human-centered digital products that solve real problems.',
        'footer.quickLinks': 'Quick Links',
        'footer.getInTouch': 'Get In Touch',
        'footer.location': '📍 Shenzhen, China',
        'footer.email': 'zhiwen628@gmail.com',
        'footer.phone': '+86 136 7028 2592',
        'footer.copyright': '© 2024 Zhiwen Zou. All rights reserved.',
        
        // 关于页面
        'about.title': 'About Me',
        'about.subtitle': 'Designer, problem solver, and advocate for user-centered design',
        'about.greeting': "Hello, I'm Zhiwen",
        'about.description1': "I'm a product designer with a passion for creating meaningful digital experiences. My approach combines user research, intuitive interfaces, and business strategy to deliver products that people love to use.",
        'about.description2': "Previously, I've worked with tech startups and established companies across fintech, e-commerce, and SaaS industries. I believe good design is invisible—it just works.",
        'about.description3': "When I'm not designing, you can find me hiking in the mountains, reading design books, or experimenting with new design tools and technologies.",
        'about.experience': 'Work Experience',
        'about.skills': 'Software Skills',
        'about.contact': 'Contact Information',
        
        // 工作经历1
        'exp1.date': '2022-Present',
        'exp1.title': 'Senior UI/UX Designer',
        'exp1.company': 'Tencent Technology',
        'exp1.description': 'Responsible for user experience design of company core products, leading design team, establishing design system.',
        
        // 工作经历2
        'exp2.date': '2020-2022',
        'exp2.title': 'UI Designer',
        'exp2.company': 'ByteDance',
        'exp2.description': 'Participated in the design of multiple mobile applications, focusing on interface aesthetics and user experience optimization.',
        
        // 工作经历3
        'exp3.date': '2019-2020',
        'exp3.title': 'Visual Designer',
        'exp3.company': 'Alibaba',
        'exp3.description': 'Responsible for brand visual design and marketing material production, participated in e-commerce platform interface design.',
        
        // 技能名称
        'skill.figma': 'Figma',
        'skill.sketch': 'Sketch',
        'skill.ps': 'Adobe Photoshop',
        'skill.ai': 'Adobe Illustrator',
        'skill.ae': 'After Effects',
        'skill.blender': 'Blender',
        'skill.cdr': 'CorelDRAW',
        
        // 联系信息
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.email2': 'Secondary Email',
        
        // 作品页面
        'work.title': 'All Projects',
        'work.subtitle': 'A comprehensive collection of my UI/UX design work across various industries and platforms',
        'work.branding': 'Branding',
        'work.backToHome': '← Back to Home',
        
        // 项目4
        'project4.category': 'Mobile App',
        'project4.title': 'Personalized Fitness App',
        'project4.description': 'Designed a fitness application that creates personalized workout plans based on user goals, fitness level, and available equipment.',
        
        // 项目5
        'project5.category': 'Web Design',
        'project5.title': 'Travel Booking Platform',
        'project5.description': 'Redesigned the user flow for a travel booking website, simplifying the search and booking process for flights and accommodations.',
        
        // 项目6
        'project6.category': 'Branding',
        'project6.title': 'Tech Startup Brand Identity',
        'project6.description': 'Developed a complete brand identity for a B2B SaaS startup, including logo, color palette, typography, and brand guidelines.',
        
        // 案例研究页按钮
        'case.back': '← Back to All Projects'
    }
};

// 当前语言状态
let currentLang = 'zh';

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 从本地存储获取语言设置
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang) {
        currentLang = savedLang;
    }
    
    // 更新页面语言
    updateLanguage();
    
    // 设置语言切换按钮事件
    setupLanguageSwitcher();
    
    // 其他初始化代码...
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // 如果不是内部锚点链接，直接跳转
            if (href === '#' || href.startsWith('#!')) {
                e.preventDefault();
                return;
            }
            
            // 如果是页面内的锚点
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                if (targetId) {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });
    
    // 作品筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有按钮的active类
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // 为当前点击的按钮添加active类
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                const workItems = document.querySelectorAll('.work-item');
                
                workItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        // 添加淡入动画
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // 切换图标
            if (navLinks.classList.contains('active')) {
                this.innerHTML = '✕';
            } else {
                this.innerHTML = '☰';
            }
        });
        
        // 点击菜单项后关闭菜单
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '☰';
                }
            });
        });
    }
    
    // 调整导航栏背景
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
            } else {
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = 'none';
            }
        }
    });
    
    // 初始加载时显示所有作品
    const workItems = document.querySelectorAll('.work-item');
    if (workItems.length > 0) {
        workItems.forEach(item => {
            item.style.opacity = '1';
        });
    }
    
    // 响应式调整
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks) {
            navLinks.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '☰';
            }
        }
    });
});

// 语言切换功能
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                localStorage.setItem('portfolio-lang', lang);
                updateLanguage();
                
                // 更新按钮状态
                langButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                
                // 更新body类
                document.body.classList.toggle('en', lang === 'en');
            }
        });
        
        // 设置初始按钮状态
        if (button.getAttribute('data-lang') === currentLang) {
            button.classList.add('active');
            document.body.classList.toggle('en', currentLang === 'en');
        }
    });
}

// 更新页面语言
function updateLanguage() {
    // 获取当前语言的翻译
    const langData = translations[currentLang];
    
    // 更新所有有data-key属性的元素
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (langData[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });
    
    // 更新导航栏姓名
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) {
        navLogo.textContent = currentLang === 'zh' ? '邹智文' : 'Zhiwen Zou';
    }
    
    // 更新页脚姓名
    const footerName = document.querySelector('.footer-name');
    if (footerName) {
        footerName.textContent = currentLang === 'zh' ? '邹智文' : 'Zhiwen Zou';
    }
    
    // 更新邮箱和电话（根据语言切换显示不同的邮箱）
    const emailLinks = document.querySelectorAll('.contact-email');
    emailLinks.forEach(link => {
        if (link.getAttribute('data-type') === 'primary') {
            link.textContent = currentLang === 'zh' ? '13670282592@163.com' : 'zhiwen628@gmail.com';
            link.href = currentLang === 'zh' ? 'mailto:13670282592@163.com' : 'mailto:zhiwen628@gmail.com';
        }
    });
}
