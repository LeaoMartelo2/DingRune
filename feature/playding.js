import Config from "../Config"

let sound;
let volume;
let pitch;


let cooldown = false;

register("entityDeath", (entity) => {
    if(!Config.dingaling || entity == null || cooldown) {
        return;
    }
    const distance = entity.distanceTo(Player.getPlayer())

    if(distance > 16) {
        return;
    }

    cooldown = true;
    sound = Config.sound_played;



    //volume = Config.volume;
    //pitch = Config.pitch;


    ding();

    //took this inplementation straight from Runes (ct import runes amazing job pls dont kill me)

    setTimeout(() => {
        cooldown = false;
    }, 1);
});

const ding = () => {
    World.playSound(sound, Config.sound_volume, Config.sound_pitch);
    //console.log(volume + ", " + pitch); //why is this shit undefined i hate js i hate js i hate js
}