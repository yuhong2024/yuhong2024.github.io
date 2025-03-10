document.addEventListener('DOMContentLoaded', function() {
    // 获取语言切换按钮
    const enBtn = document.getElementById('en-btn');
    const zhBtn = document.getElementById('zh-btn');
    
    // 默认语言为英文
    let currentLang = 'en';
    
    // 切换到英文
    enBtn.addEventListener('click', function() {
        if (currentLang !== 'en') {
            switchLanguage('en');
            updateActiveButton('en');
            currentLang = 'en';
        }
    });
    
    // 切换到中文
    zhBtn.addEventListener('click', function() {
        if (currentLang !== 'zh') {
            switchLanguage('zh');
            updateActiveButton('zh');
            currentLang = 'zh';
        }
    });
    
    // 更新激活的按钮样式
    function updateActiveButton(lang) {
        if (lang === 'en') {
            enBtn.classList.add('active');
            zhBtn.classList.remove('active');
        } else {
            zhBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
    }
    
    // 切换语言函数
    function switchLanguage(lang) {
        // 获取所有带有 data-en 和 data-zh 属性的元素
        const elements = document.querySelectorAll('[data-en][data-zh]');
        
        // 遍历元素并更新文本内容
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
        
        // 更新导航链接
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.textContent = link.getAttribute(`data-${lang}`);
        });
        
        // 更新 HTML 语言属性
        document.documentElement.lang = lang;
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 考虑固定头部的高度
                    behavior: 'smooth'
                });
            }
        });
    });
}); 