// blog data
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
        title: 'entry 11',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 12',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 13',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 14',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 15',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 16',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    },
    entry = {
        type: 'devel',
        date: '2021-10-04 09:47',
        title: 'entry 17',
        short: 'short description of the blog text',
        path: '/src/blogs/devel2.html',
    }
]

const lorem = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br><br>'+
'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br><br>'+
'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br><br>'+
'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br><br>'+
'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br><br>'


let pageType = 'all'

window.addEventListener("load", function(event) {
    setSidebarData()

    pageType = $('#pageType').val()

    console.log(`type: ${pageType}`);
    setMainData(pageType)
});

function setSidebarData() {    
    // latest 6 blog-entries in sidebar
    blogEntries
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach( (entry, index) => {
            if(index < 12) {
                const html = 
                    `<section class="latest_blog">
                        <h4 class="latest_blog_title">${entry.title}</h4>
                        <div class="latest_blog_detail">
                            <div class="latest_blog_date">${entry.date}</div>
                            <div class="latest_blog_type">${entry.type}</div>
                        </div>
                    </section>`
    
                // console.log(html);
                $('#sidebar').append(html)
            }
        })
}

let currDataIdx = 0
let newDataIdx = 3

function setMainData(type = 'all', showMore = false) {
    // latest blog-entries in main section
    let isData = false;

    const filtered = 
        blogEntries
            .filter(entry => (type === 'all' || entry.type === type))
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    filtered.forEach( (entry, index) => {
        isData = true
        const even = index % 2 === 0

        if(index >= currDataIdx && index < newDataIdx) {
            const hideType = entry.type === type ? `visibility:hidden` : ''
            
            const html = 
                `<section class="main_blog ${even ? 'even' : 'odd'}">
                    <div class="main_blog_detail">
                        <div class="main_blog_date" style="order: ${even ? '0' : '1'}">${entry.date}</div>
                        <div class="main_blog_type" style="${hideType}; order: ${even ? '1' : '0'}">${entry.type}</div>
                    </div>
                    <h2 class="main_blog_title">${entry.title}</h2>
                    <div class="main_blog_detail">
                        ${lorem}
                    </div>
                </section>`

            // console.log(html);
            $('#mainData').append(html)

            currDataIdx = index
        }
    })
    
    if(isData && !showMore) {
        $('#main').append(`<section id="showMoreData" onClick="showMoreData()" class="main_showmore">show more</section>`)
    } 
    
    // if no more data, then hide 'show More' button
    if(newDataIdx >= filtered.length) {
        $('#showMoreData').hide()
    }
}

function showMoreData() {
    newDataIdx += 2
    currDataIdx++

    setMainData(pageType, true)
}
