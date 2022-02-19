// css styles for each option, overrides mspaThemes.scss
const dayGradient = `
#app > *, .tabFrame > div {
    --system-skycolor: #35bfff;
    --system-background:    
        url(assets://archive/collection/homebg_right.png) left top repeat-y fixed,
        url(assets://archive/collection/homebg_left.png) right top repeat-y fixed,
        linear-gradient(180deg, #35bfff 50%, #0c86e9 100%) fixed;
}`

const sunset = `
#app > *, .tabFrame > div {
    --system-skycolor: #ff953f;
    --system-background: 
        url(assets://archive/collection/sunset_homebg_right.png) left top repeat-y fixed,
        url(assets://archive/collection/sunset_homebg_left.png) right top repeat-y fixed;
}`

const sunsetGradient = `
#app > *, .tabFrame > div {
    --system-skycolor: #ff953f;
    --system-background: 
            url(assets://archive/collection/sunset_homebg_right.png) left top repeat-y fixed,
            url(assets://archive/collection/sunset_homebg_left.png) right top repeat-y fixed,
            linear-gradient(180deg, #ff953f 50%, #D34C1B 100%) fixed;
}`

const night = `
#app > *, .tabFrame > div {
    --system-skycolor: #1e1e1e;
    --system-background: 
        url(assets://archive/collection/night_homebg_right.png) left top repeat-y fixed,
        url(assets://archive/collection/night_homebg_left.png) right top repeat-y fixed;
}`

const nightGradient = `
#app > *, .tabFrame > div {
    --system-skycolor: #1e1e1e;
    --system-background: 
            url(assets://archive/collection/night_homebg_right.png) left top repeat-y fixed,
            url(assets://archive/collection/night_homebg_left.png) right top repeat-y fixed,
            linear-gradient(180deg, #2c3030 30%, #1e1e1e 100%) fixed;
}`

// dynamic: overrides to night when in dark theme
const nightDynamic = `
.pageBody.customStyles.dark {
    --system-skycolor: #1e1e1e;
    --system-background: 
        url(assets://archive/collection/night_homebg_right.png) left top repeat-y fixed,
        url(assets://archive/collection/night_homebg_left.png) right top repeat-y fixed;
}`

// honestly I don't know what controls priority between the two css overrides here but it works out to the way I need it to so yeah
const nightDynamicGradient = `
#app > *, .tabFrame > div {
    --system-skycolor: #35bfff;
    --system-background:    
        url(assets://archive/collection/homebg_right.png) left top repeat-y fixed,
        url(assets://archive/collection/homebg_left.png) right top repeat-y fixed,
        linear-gradient(180deg, #35bfff 50%, #0c86e9 100%) fixed;
}
.pageBody.customStyles.dark {
    --system-skycolor: #1e1e1e;
    --system-background: 
            url(assets://archive/collection/night_homebg_right.png) left top repeat-y fixed,
            url(assets://archive/collection/night_homebg_left.png) right top repeat-y fixed,
            linear-gradient(180deg, #2c3030 30%, #1e1e1e 100%) fixed;
}`

module.exports = {
	
    title: "Cloud BG Changer", 
    summary: "Alternatives for the default cloud background",
    author: "Niklink",
    modVersion: "1",
    description: "Change those clouds to fit your mood! • <a href=\"https://github.com/Niklink/cloudBGchanger\">Source code / updates</a><br><b>Previews (w/gradients):</b> <a href=\"assets://archive/collection/daypreview.png\">Day</a> • <a href=\"assets://archive/collection/sunsetpreview.png\">Sunset</a> • <a href=\"assets://archive/collection/nightpreview.png\">Night</a>",
    styles: [],

    computed(api){
        store = api.store

        // sets default on first run (pretty sure this works)
        store.set("option", store.get("option", "nightDynamicGradient"))

        computed = {
            styles: []
        }

        switch (store.get("option")) {
            case 'dayGradient':
                computed.styles.push(
                    {body: dayGradient}
                )
                break;
            case 'sunset':
                computed.styles.push(
                    {body: sunset}
                )
                break;
            case 'sunsetGradient':
            computed.styles.push(
                {body: sunsetGradient}
            )
                break;
            case 'night':
                computed.styles.push(
                    {body: night}
                )
                break;
            case 'nightGradient':
                computed.styles.push(
                    {body: nightGradient}
                )
                break;
            case 'nightDynamic':
                computed.styles.push(
                    {body: nightDynamic}
                )
                break;
            case 'nightDynamicGradient':
                computed.styles.push(
                    {body: nightDynamicGradient}
                )
                break;
        }

        return computed   
    },

    trees: {
        "./": "assets://archive/collection/"
    },

    settings: {
        radio: [{
            model: "option",
            label: "Cloud style",
            desc: "Dynamic: Changes from day to night clouds when Dark Mode is active",
            options: [{
                value: "nightDynamicGradient",
                label: "Dynamic (Gradient)",
            },{
                value: "dayGradient",
                label: "Day (Gradient)"
            },{
                value: "sunsetGradient",
                label: "Sunset (Gradient)"
            },{
                value: "nightGradient",
                label: "Night (Gradient)"
            },{
                value: "nightDynamic",
                label: "Dynamic"
            },{
                value: "default",
                label: "Day"
            },{
                value: "sunset",
                label: "Sunset"
            },{
                value: "night",
                label: "Night"
            }]
        }]
    }

}