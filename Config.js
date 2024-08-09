import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
} from '../Vigilance/index';

@Vigilant("DingRune", "DingRune", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["Settings"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class Config {
    constructor() {
        this.initialize(this);

        this.setCategoryDescription("Ding");

    }


    @SwitchProperty({
        name: "Main toggle",
        description: "enables sound on entity death",
        category: "Settings",
        subcategory: "togglet"
    })
    dingaling = false;

    @TextProperty({
        name: "Sound to be played",
        description: "if you got tired of ding ding",
        category: "Settings",
        subcategory: "soun d",
        placeholder: 'note.pling'
    })
    sound_played = 'note.pling';

    @SliderProperty({
        name: "Sound volume",
        description: "loud ding!",
        category: "Settings",
        subcategory: "soun d",
        min: 0,
        max: 2
    })
    sound_volume = 1;
    
    @SliderProperty({
        name: "Sound Pitch",
        description: "DING! or DOUNG!",
        category: "Settings",
        subcategory: "soun d",
        min:0,
        max: 2
    })
    sound_pitch = 2;

   
}
export default new Config()