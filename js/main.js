// 公共脚本文件 - 设计师作品集网站
// 修复作品分类筛选功能

document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，开始初始化脚本...');
    
    // 1. 滚动动画 for design items
    const designItems = document.querySelectorAll('.design-item');
    
    if (designItems.length > 0) {
        console.log('找到设计项:', designItems.length);
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

    // 2. 平滑滚动 for navigation links
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

    // 3. 作品筛选功能 - 修复版本
    const filterTabs = document.querySelectorAll('.filter-tab');
    const workItems = document.querySelectorAll('.work-item');
    
    console.log('找到筛选标签数量:', filterTabs.length);
    console.log('找到作品项数量:', workItems.length);
    
    if (filterTabs.length > 0 && workItems.length > 0) {
        console.log('开始绑定筛选事件...');
        
        // 为每个筛选标签添加点击事件
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('点击了筛选按钮:', this.textContent, '数据过滤:', this.getAttribute('data-filter'));
                
                // 移除所有active类
                filterTabs.forEach(t => {
                    t.classList.remove('active');
                });
                
                // 为当前点击的标签添加active类
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                console.log('筛选值:', filterValue);
                
                // 筛选作品
                let visibleCount = 0;
                workItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = 'block';
                        // 添加淡入动画
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                        visibleCount++;
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
                
                console.log('显示的作品数量:', visibleCount);
            });
        });
        
        // 初始化显示所有作品
        console.log('筛选功能初始化完成，显示所有作品');
    } else {
        console.log('警告: 未找到筛选标签或作品项');
    }

    // 4. 设置当前页面导航激活状态
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

    // 5. 作品项悬停效果
    workItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
        });
    });

    // 6. 响应式导航菜单 (移动端)
    const createMobileMenu = () => {
        const headerContent = document.querySelector('.header-content');
        const navLinks = document.querySelector('.nav-links');
        
        if (!headerContent || !navLinks) {
            console.log('未找到导航元素');
            return;
        }
        
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
            console.log('创建移动端菜单');
            
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
                display: block;
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
                console.log('点击移动菜单按钮');
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
    
    // 7. 添加字体图标（如果尚未添加）
    if (!document.querySelector('#font-awesome')) {
        console.log('添加Font Awesome图标库');
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.id = 'font-awesome';
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);
    }
    
    // 8. 调试信息
    console.log('脚本初始化完成');
});

// 全局函数，方便在控制台测试筛选功能
window.testFilter = function(filterValue) {
    console.log('测试筛选功能，筛选值:', filterValue);
    const workItems = document.querySelectorAll('.work-item');
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    // 更新按钮状态
    filterTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-filter') === filterValue) {
            tab.classList.add('active');
        }
    });
    
    // 筛选作品
    workItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'block';
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
    
    console.log('筛选完成，显示类别:', filterValue);
};

// 页面加载后初始化所有作品显示
window.addEventListener('load', function() {
    console.log('页面完全加载完成');
    
    // 确保所有作品在初始时都是可见的
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    });
});

// 修复作品筛选的另一个方法：直接绑定事件到按钮
function initializeFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-tab');
    
    if (filterButtons.length > 0) {
        console.log('初始化筛选按钮，找到', filterButtons.length, '个按钮');
        
        filterButtons.forEach(button => {
            // 添加新的事件监听器
            button.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('按钮点击事件触发:', this.textContent);
                
                // 获取筛选值
                const filterValue = this.getAttribute('data-filter');
                
                // 更新按钮状态
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // 筛选作品
                filterWorks(filterValue);
            });
        });
    }
}

// 筛选作品的函数
function filterWorks(filterValue) {
    const workItems = document.querySelectorAll('.work-item');
    console.log('开始筛选，筛选值:', filterValue, '作品数量:', workItems.length);
    
    let visibleCount = 0;
    workItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
            requestAnimationFrame(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });
            visibleCount++;
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
    
    console.log('筛选完成，显示', visibleCount, '个作品');
    return visibleCount;
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化筛选功能');
    initializeFilterButtons();
    
    // 确保初始状态显示所有作品
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    });
});