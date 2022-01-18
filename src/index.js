// 
const blogEntries = [
    entry = {
        type: 'devel',
        date: '2022-01-17 15:35',
        title: 'Dealing with session in React',
        short: 'short description of the blog text',
        path: '/src/blogs/devel1.html',
    },
    entry = {
        type: 'sports',
        date: '2021-12-28 12:15',
        title: 'My Biketrack around the golf course',
        short: 'short description of the blog text',
        path: '/src/blogs/sports1.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'Sort Data in an JS Array',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2022-01-02 19:00',
        title: 'entry 12',
        short: 'short description of the blog text',
        path: '/src/blogs/devel12.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 2',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 2',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 2',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 2',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 2',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 2',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 2',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    }
]

window.addEventListener("load", function(event) {
    console.log("Alle Ressourcen haben das Laden beendet!");

    // latest 6 blog-entries in sidebar
    blogEntries
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach( (entry, index) => {
            if(index < 6) {
                const html = `<section class="latest_blog">
                    <div class="latest_blog_type">${entry.type}</div>
                    <h4 class="latest_blog_title">${entry.title}</h4>
                    <div class="latest_blog_date">${entry.date}</div>
                </section>`
    
                console.log(html);
                $('#sidebar').append(html)
            }
        })
    // console.log($('#id1').text());
});
