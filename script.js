 const body = document.body;
        const themeToggle = document.getElementById('themeToggle');

        function setTheme(dark) {
            if (dark) {
                body.classList.add('dark');
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark');
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        setTheme(savedTheme === 'dark');

        themeToggle.addEventListener('click', () => {
            setTheme(!body.classList.contains('dark'));
        });

        // Simple scroll animation using IntersectionObserver
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll('.fade-in').forEach(section => {
            observer.observe(section);
        });