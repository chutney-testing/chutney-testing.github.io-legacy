// function to show the right menu, on trigger => display the affiliated menu
function showmenu(event) {
    // debug console.log(event);
    if (document.getElementById) {
        var menudroite = document.getElementById("rightmenu");
        // loop to check if the right menu has childs AND if the nb of child > 1, then we'll decrease each time
        clearHTMLElement(menudroite, 1);

        menutask[event.srcElement.textContent].forEach(element => {
            var templateClone = document.importNode(document.getElementById("rightmenu_t").content, true);
            var a = templateClone.querySelector('a');

            a.textContent = element;

            menudroite.appendChild(a);
            menudroite.style.visibility = 'visible';
        });
    }
}
const menutask = {
    "AMQP": [
        "AMQP Basic Consume Task",
        "AMQP Basic Get Task",
        "AMQP Basic Publish Task",
        "AMQP Clean Queues Task",
        "AMQP Create Bound Temporary Queue Task",
        "AMQP Delete Queue Task",
        "AMQP Unbind Queue Task",
        "Qpid Qpid Server Start Task",
        "Qpid Qpid Server Stop Task",
    ],
    "Assertions": [
        "Assert Task",
        "Compare Task",
        "Json Assert Task",
        "Json Compare Task",
        "Json Validation Task",
        "String Assert",
        "Xml Assert Task",
        "Xsd Validation Task",
    ],
    "Context": [
        "Context Put Task",
        "Debug Task",
        "Fail Task",
        "Final Task",
        "Sleep Task",
        "Success Task",
    ],
    "Groovy": [
        "Groovy Task",
    ],
    "HTTP": [
        "HTTP Delete Task",
        "HTTP Get Task",
        "HTTP Patch Task",
        "HTTP Post Task",
        "HTTP Put Task",
        "HTTP Soap Task",
        "HTTP Task Helper ",
        "HTTP Listener Task ",
        "HTTP Server Start Task ",
        "HTTP Server Stop Task ",
    ],
    "JMS": [
        "JMS Broker Start Task",
        "JMS Broker Stop Task",
        "JMS Clean Queue Task",
        "JMS Connection Factory",
        "JMS Listener Task",
        "JMS Sender Task",
        "Unchecked JMS Exception",
    ],
    "Kafka": [
        "Chutney Kafka Producer Factory",
        "Kafka Basic Consume Task",
        "Kafka Basic Publish Task",
        "Kafka Broker Start Task",
        "Kafka Broker Stop Task",
        "Kafka Client Factory Helper",
        "Kafka Consumer Factory",
    ],
    "Micrometer": [
        "Micrometer Counter Task",
        "Micrometer Functions",
        "Micrometer Gauge Task",
        "Micrometer Summary Task",
        "Micrometer Task Helper",
        "Micrometer Timer Start Task",
        "Micrometer Timer Stop Task",
        "Micrometer Timer Task",
    ],
    "Mongo": [
        "Mongo Count Task",
        "Mongo Databsae Factory",
        "Mongo Delete Task",
        "Mongo Find Task",
        "Mongo Insert Task",
        "Mongo List Task",
        "Mongo Task Validators Utils",
        "Mongo Update Task",
    ],
    "Radius": [
        "Radius Accounting Task",
        "Radius Authenticate Task",
        "Radius Helper Task",
    ],
    "Selenium": [
        "Selenium Click Task",
        "Selenium Close Task",
        "Selenium Driver Init Task",
        "Selenium Find Behavior Task",
        "Selenium Get Attribute Task",
        "Selenium Get Task",
        "Selenium Get Text Task",
        "Selenium Hover Then Click Task",
        "Selenium Quit Task",
        "Selenium Remote Driver Init Task",
        "Selenium Screenshot Task",
        "Selenium Scroll To Task",
    ],
    "SQL": [
        "SQL Task"
    ],
    "SSH": [
        "Scp Download Task",
        "Scp Upload Task",
        "Sftp Download Task",
        "Sftp File Info Task",
        "Sftp List Dir Task",
        "Sftp Upload Info Task",
        "Ssh  Client Task",
        "Ssh Server Start Task",
        "Ssh Server Stop Task",
    ]
}

// display the left menu when the page is loaded
function loadleftmenu() {
    if (document.getElementById("leftmenu_t")) {
        var menugauche = document.getElementById("leftmenu");
        clearHTMLElement(menugauche, 0);
        Object.getOwnPropertyNames(menutask).forEach(element => {
            var templateClone = document.importNode(document.getElementById("leftmenu_t").content, true);
            var a = templateClone.querySelector('a');
            a.textContent = element;


            menugauche.appendChild(a);
        });
    }
}
window.addEventListener("load", loadleftmenu);