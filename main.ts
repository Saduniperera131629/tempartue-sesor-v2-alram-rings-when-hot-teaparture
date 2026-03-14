basic.forever(function () {
    if (input.temperature() > 35) {
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("B B B B B B B B ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Happy)
    }
})
