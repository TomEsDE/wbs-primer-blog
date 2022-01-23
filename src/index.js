// #################
// blog data
const lorem = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br><br>'+
'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br><br>'+
// 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br><br>'+
// 'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br><br>'+
'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br><br>'

const lorem2 = 
// 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br><br>'+
// 'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br><br>'+
'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br><br>'+
'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br><br>'+
'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br><br>'

const myprimer = 'Here is a little description how I build my primer page.<br><br>'
+'My primer is mostly html with css, but for the navigation sections (except Gallery) I use some javascript to fill the sidebar and the main-section dynamically.<br><br>'
+'The data is stored in an array with complex elements that contain blogentry values like "time", "title" and "short description".<br><br>'
// +'These values I read in a loop and "fill" the sidebar and main section with a list of my blogs - sorted by date descending.<br><br>'

const sortjsarray = 'Sorting data in an array is pretty easy.<br><br>'+
'In this example I show you how to sort complex array that contain a date field.<br><br>'+
// '....<br><br>'+
// '...<br><br>'
''

const gitbranchingmodel = '<em>note: text copied from somewhere else</em><br><br>In this post I present the development model that I’ve introduced for some of my projects (both at work and private) about a year ago, and which has turned out to be very successful.<br><br>'+
'I’ve been meaning to write about it for a while now, but I’ve never really found the time to do so thoroughly, until now. I won’t talk about any of the projects’ details, merely about the branching strategy and release management.<br><br>'+
''


const short = 'short description of the blog text';

const blogEntries = [
    {
        type: 'coding',
        date: '2022-01-17 15:35',
        title: 'My primer with a little JavaScript',
        short: myprimer,
        path: '/blogs/myprimer.html',
    },
    {
        type: 'sports',
        date: '2021-12-28 12:15',
        title: 'My running track in the northeast of BT',
        short: lorem,
        path: '/blogs/sportsblogentry.html',
    },
    {
        type: 'coding',
        date: '2021-12-18 18:37',
        title: 'Sort Data in an JS Array',
        short: sortjsarray,
        path: '/blogs/codingblogentry.html',
    },
    {
        type: 'coding',
        date: '2022-01-02 19:00',
        title: 'A successful Git branching model',
        short: gitbranchingmodel,
        path: '/blogs/codingblogentry.html',
    },
    {
        type: 'sports',
        date: '2021-11-12 07:55',
        title: 'Fun flat Race Bike track north of BT',
        short: lorem2,
        path: '/blogs/sportsblogentry.html',
    },
    {
        type: 'coding',
        date: '2021-09-02 11:05',
        title: 'more coding 1',
        short: lorem,
        path: '/blogs/codingblogentry.html',
    },
    {
        type: 'sports',
        date: '2021-12-01 08:32',
        title: 'Home Workout without weights',
        short: lorem2,
        path: '/blogs/sportsblogentry.html',
    },
    {
        type: 'coding',
        date: '2021-10-14 17:27',
        title: 'more coding 2',
        short: lorem,
        path: '/blogs/codingblogentry.html',
    },
    {
        type: 'coding',
        date: '2021-11-12 08:28',
        title: 'more coding 3',
        short: lorem,
        path: '/blogs/codingblogentry.html',
    },
    {
        type: 'sports',
        date: '2021-10-04 09:47',
        title: 'more sports',
        short: lorem,
        path: '/blogs/sportsblogentry.html',
    },
    {
        type: 'coding',
        date: '2021-08-14 22:13',
        title: 'more coding 4',
        short: lorem,
        path: '/blogs/codingblogentry.html',
    }
]



// #################
// functions and data control

let pageType = 'none'
let isPageLoaded = false

window.addEventListener("load", function(event) {
    // sidebar data
    setSidebarData(6)

    pageType = $('#pageType').val()  // coding or sports

    // main section data
    if(pageType) setMainData(pageType)

    isPageLoaded = true
});

/**
 * fill sidebar with data from blogEntries-Array (latest)
 * 
 * @param {*} limit defines how many entries to list in sidebar
 */
function setSidebarData(limit = 8) {
    
    // range slider to dynamically set the limit
    if(!isPageLoaded) {
        const html = 
            `<div id="sidebar_limit" style="font-size: 10pt; margin: 10px 5px">
                <div style="padding-left: 5px">Limit: <span id="limitVal">${limit}</span></div>
                <input id="ipLimit" type="range" min="1" max="${blogEntries.length}" value="${limit}" onInput="setSliderVal()" style="color:black">
                <!--<button onClick="setLimit()" style="padding-left:5px; color: black">show!</button>-->
            </div>`
        $('#sidebar').append(html)
    }

    // latest blog-entries in sidebar
    blogEntries
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit)
        .forEach( entry => {
            // create html part
            const html = 
                `<a href="${entry.path}"><section class="latest_blog">
                    <h4 class="latest_blog_title">${entry.title}</h4>
                    <div class="latest_blog_detail">
                        <div class="latest_blog_date">${formatDate(entry.date)}</div>
                        <div class="latest_blog_type">${entry.type}</div>
                    </div>
                </section></a>`

            // append html with jquery
            $('#sidebar').append(html)
        })
    
}

// data control main section
let currDataIdx = 0
let newDataIdx = 3

/**
 * fill main-section with data from blogEntries-Array
 * 
 * @param {*} type devel | sports
 * @param {*} showMore if true, the showMore-Button was clicked
 */
function setMainData(type = 'all', showMore = false) {
    let isData = false;
    
    // filter data by type and sort by date
    const filtered = 
        blogEntries
            .filter(entry => (type === 'all' || entry.type === type))
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // loop filtered blog-entries and create html to put in main-section
    filtered.forEach( (entry, index) => {
        isData = true
        const even = index % 2 === 0
        
        // control what data is added depending if show-more-button is clicked
        if(index >= currDataIdx && index < newDataIdx) {
            // only show type in 'Home'
            const hideType = entry.type === type ? `hide` : '' //`visibility: hidden` : ''
            
            // create html part
            const html = 
                `<a href="${entry.path}"><section class="main_blog ${even ? 'even' : 'odd'}">
                    <div class="main_blog_detail">
                        <div class="main_blog_date">${formatDate(entry.date)}</div>
                        <div class="main_blog_type ${hideType}">${entry.type}</div>
                    </div>
                    <article>
                        <h2 class="main_blog_title">${entry.title}</h2>
                        <div class="main_blog_detail">
                            ${entry.short}
                        </div>
                    </article>
                    <div class="main_blog_readmore">read more ...</div>
                </section></a>`

            // append html with jquery
            $('#mainData').append(html)

            // data control (for show-more-button)
            currDataIdx = index
        }
    })
    
    // add 'show More'-button
    if(isData && !showMore) {
        $('#main').append(`<section id="showMoreData" onClick="showMoreData()" class="main_showmore">show more</section>`)
    } 
    
    // if all data is shown -> hide 'show More' button
    if(newDataIdx >= filtered.length) {
        $('#showMoreData').hide()
    }
}

/**
 * show more data of the data-array in main section
 */
function showMoreData() {
    newDataIdx += 2
    currDataIdx++

    setMainData(pageType, true)
}

/**
 * set limit range slider val as text 
 */
function setSliderVal(){
    $('#limitVal').text($('#ipLimit').val())

    setLimit()
}

/**
 *  set new sidebar limit
 */
function setLimit() {
    // remove data first...
    $("#sidebar").find("a").remove()

    // ... then reset it
    setSidebarData($('#ipLimit').val())
}

function formatDate(date) {
    return new Date(date).toLocaleString("de-DE", {year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'})
}
