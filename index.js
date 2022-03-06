const root                  = document.querySelector(':root');
const menuItems             = document.querySelectorAll('.menu-item');
const messageNotifications  = document.querySelector('#messages-notifications')
const messages              = document.querySelector('.messages')
const message               = messages.querySelectorAll('.message')
const messageSearch         = document.querySelector('#message-search')
const themeMenu             = document.querySelector('#theme')
const themeModal            = document.querySelector('.theme-modal');
const fontSizes             = document.querySelectorAll('.choose-size span');
const colorPalatte          = document.querySelectorAll('.choose-color span');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


// ---------------- sidebar ------------------------
const changeActiveItem =()=>{
    menuItems.forEach(item => {
        item.classList.remove("active")
    })
}

menuItems.forEach(item => {

    item.addEventListener("click", ()=> {

        changeActiveItem()
        item.classList.add("active");
        const popUp = document.querySelector('.notifications-popup');
        const notificationCount = document.querySelector('.notification-count');

        if (item.id != "notifications"){
            popUp.style.display = "none";
        }else{
            popUp.style.display = "block";
            notificationCount.style.display = "none";
        }
    })
})


// ------------------------- messages ----------------------------

// search message 

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector("h5").textContent.toLowerCase();

        if(name.indexOf(val) != -1){
            chat.style.display = "";
        }else{
            chat.style.display = "none";
        }
    })
}

messageSearch.addEventListener("keyup", searchMessage);


// highlight message card when click message menu item 

const notificationHighLight = ()=>{
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageNotifications.querySelector('.notification-count').style.display = "none";

    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000)
}

messageNotifications.addEventListener("click", notificationHighLight);



// ---------------------- theme customization -----------------------------

const openThemeModal = ()=>{
    themeModal.style.display = "grid";
}


const closeThemeModal = (e) => {

    if (e.target.classList.contains('customize-theme')){
        themeModal.style.display = "none";
    }
}

themeMenu.addEventListener("click", openThemeModal)
themeModal.addEventListener("click", closeThemeModal)


// ----------- font sizes ------------------------

const changeActiveSize = () => {
    fontSizes.forEach(item => {
        item.classList.remove("active")
    })
}

fontSizes.forEach(size => {

    
    size.addEventListener("click", ()=> {

        let fontSize;

        changeActiveSize()

        size.classList.add("active")

        if (size.classList.contains('font-size-1')) {
            fontSize = '0.8rem';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');

        } else if (size.classList.contains('font-size-2')) {
            fontSize = '0.9rem';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '1rem';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '1.2rem';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '1.5rem';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        document.querySelector('html').style.fontSize = fontSize;
    })


})


// ---------------- change primary color ----------------------

const changeActiveColor = () => {
    colorPalatte.forEach(item => {
        item.classList.remove("active")
    })
}


const changePrimaryColor = (e)=>{

    changeActiveColor()

    e.target.classList.add("active")

    let primaryHue;
    
    if (e.target.classList.contains('color-1')){
        primaryHue = 252;
    } else if (e.target.classList.contains('color-2')) {
        primaryHue = 52;
    } else if (e.target.classList.contains('color-3')) {
        primaryHue = 352;
    } else if (e.target.classList.contains('color-4')) {
        primaryHue = 152;
    } else if (e.target.classList.contains('color-5')) {
        primaryHue = 202;
    }

    root.style.setProperty('--primary-color-hue', primaryHue)
}

colorPalatte.forEach(color => {
    color.addEventListener("click", changePrimaryColor)
})


// ---------------- change theme bg color ----------------------


let 
lightColorLightness,
whiteColorLightness,
darkColorLightness;


const changeActiveBgColor = (x, y) => {

    if (x && y){
        x.classList.remove("active")
        y.classList.remove("active")
    }

}


const changeBg = ()=>{
    root.style.setProperty('--light-color-ligthness', lightColorLightness)
    root.style.setProperty('--white-color-ligthness', whiteColorLightness)
    root.style.setProperty('--dark-color-ligthness', darkColorLightness)
}

const addBg2Color = ()=>{
    lightColorLightness = "15%";
    whiteColorLightness = "20%";
    darkColorLightness  = "95%";

    changeActiveBgColor(bg1, bg3);

    bg2.classList.add("active");

    changeBg()
}


bg2.addEventListener("click", addBg2Color)


const addBg3Color = () => {
    lightColorLightness = "0%";
    whiteColorLightness = "10%";
    darkColorLightness = "95%";

    changeActiveBgColor(bg1, bg2);

    bg3.classList.add("active");

    changeBg()
}

bg3.addEventListener("click", addBg3Color)

const addBg1Color = () => {
    lightColorLightness = "95%";
    whiteColorLightness = "100%";
    darkColorLightness = "17%";

    changeActiveBgColor(bg2, bg3);

    bg1.classList.add("active");

    changeBg()
}

bg1.addEventListener("click", addBg1Color)
