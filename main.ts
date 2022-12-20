input.onGesture(Gesture.Shake, function () {
    skritt += 2
})
let skritt = 0
basic.forever(function () {
    basic.showNumber(skritt)
})
