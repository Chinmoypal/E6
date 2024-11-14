// Define the iPhone4 class
class iPhone4 {
    // Constructor to initialize properties
    constructor(ASIN, color, display, camera, bluetooth) {
        this.ASIN = ASIN;
        this.color = color;
        this.display = display;
        this.camera = camera;
        this.bluetooth = bluetooth;
    }

    // Method to dial
    dial() {
        return "tring.. tring...";
    }

    // Method to send a message
    sendMessage() {
        return "Sending message...";
    }

    // Method to click a camera picture
    cameraClick() {
        return "Camera clicked";
    }

    // Method to connect to Bluetooth
    connectBluetooth() {
        return "Bluetooth connected successfully...";
    }
}

// Creating an instance of iPhone4
let i4 = new iPhone4(
    1,
    "B09X673BQV",
    7.8,
    "iOS",
    "128mb"
);

// Accessing properties
console.log(i4.ASIN);          // Output: 1
console.log(i4.color);         // Output: "B09X673BQV"
console.log(i4.display);       // Output: 7.8
console.log(i4.camera);        // Output: "iOS"
console.log(i4.bluetooth);     // Output: "128mb"

// Calling methods
console.log(i4.dial());                // Output: "tring.. tring..."
console.log(i4.sendMessage());         // Output: "Sending message..."
console.log(i4.cameraClick());         // Output: "Camera clicked"
console.log(i4.connectBluetooth());    // Output: "Bluetooth connected successfully..."