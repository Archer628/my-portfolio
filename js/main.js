// 公共脚本文件 - 设计师作品集网站

document.addEventListener('DOMContentLoaded', function() {
    // 滚动动画 for design items
    const designItems = document.querySelectorAll('.design-item');
    
    if (designItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        designItems.forEach(item => {
            observer.observe(item);
        });
    }

    // 平滑滚动 for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 作品筛选功能
    const filterTabs = document.querySelectorAll('.filter-tab');
    const workItems = document.querySelectorAll('.work-item');
    
    if (filterTabs.length > 0) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 移除所有active类
                filterTabs.forEach(t => t.classList.remove('active'));
                // 为当前点击的标签添加active类
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // 筛选作品
                workItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // 添加淡入动画
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // 设置当前页面导航激活状态
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 作品项悬停效果
    workItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 响应式导航菜单 (移动端)
    const createMobileMenu = () => {
        const headerContent = document.querySelector('.header-content');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
            // 创建移动菜单按钮
            const mobileBtn = document.createElement('button');
            mobileBtn.classList.add('mobile-menu-btn');
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileBtn.style.cssText = `
                background: none;
                border: none;
                font-size: 24px;
                color: var(--dark-gray);
                cursor: pointer;
                display: none;
            `;
            
            headerContent.appendChild(mobileBtn);
            
            // 移动端样式调整
            navLinks.style.cssText = `
                display: flex;
                flex-direction: column;
                position: fixed;
                top: 80px;
                left: 0;
                width: 100%;
                background: var(--white);
                padding: 20px;
                box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                transform: translateY(-100%);
                opacity: 0;
                transition: all 0.3s ease;
                z-index: 99;
            `;
            
            mobileBtn.addEventListener('click', function() {
                if (navLinks.style.transform === 'translateY(0px)') {
                    navLinks.style.transform = 'translateY(-100%)';
                    navLinks.style.opacity = '0';
                } else {
                    navLinks.style.transform = 'translateY(0)';
                    navLinks.style.opacity = '1';
                }
            });
            
            // 窗口大小变化时调整
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    navLinks.style.cssText = '';
                    mobileBtn.style.display = 'none';
                } else {
                    mobileBtn.style.display = 'block';
                    navLinks.style.cssText = `
                        display: flex;
                        flex-direction: column;
                        position: fixed;
                        top: 80px;
                        left: 0;
                        width: 100%;
                        background: var(--white);
                        padding: 20px;
                        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                        transform: translateY(-100%);
                        opacity: 0;
                        transition: all 0.3s ease;
                        z-index: 99;
                    `;
                }
            });
        }
    };
    
    // 初始化移动菜单
    createMobileMenu();
    
    // 添加字体图标
    if (!document.querySelector('#font-awesome')) {
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.id = 'font-awesome';
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);
    }
});
