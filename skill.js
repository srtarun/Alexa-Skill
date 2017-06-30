

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.f54d600d-deda-4bc5-a52b-881d336ee47c";  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-GB': {
        translation: {
            FACTS: [
                'Baahubali has entered Guinness Book of World Records by making the largest poster ever of 50,000 sq feet.',
                'Around 800+ Technicians worked on Art, Design and Visual Effects for Baahubali.',
                'Body Building equipment used to train the cast costed 1.5 Crore indian Rupees.',
                'Baahubali took Almost 1 year for Pre-Production work which is highest for any Indian movie till date.',
                'S S Rajamouli,The director of Baahubali has no Single flop in his film career.',
                'Baahubali has touched $800k in USA for premieres through advance booking alone.',     
                'Baahubali is the only film that has been featured on BBC documentary on 100 years of Indian cinema even before its release.',
                'There is one thing common between the movie ‘Jurassic World’ and ‘Bahubali’ , both movies share the same special effects team.',
                'A 100 foot statue of the films antagonist, Rana Daggubati was specially erected at hyderabad which can be seen in the film.',
                'A New language known as “kiliki” was invented for the film by writer Madhan,with around 750 words and new grammar rules.',
                'Baahubali is the most expensive movie ever produced in the Indian subcontinent.',
                'In a few action sequences of Baahubali stunt choreographer Peter Hein had to control more than 2000 men and elephants.',
                'A 20-minute battle scene from the film Baahubali took four months to shoot.',
                'Baahubali has 9.4 IMDB rating, making it the highest rated Indian film ever.',
                'Baahubali will be the first Indian film that will transcend regional boundaries and made in Telugu, Tamil and dubbed in Hindi, Malayalam, English, French and Japanese.',
                'There are 5000 VFX shots used in the Baahubali the Beginning to give it the massive appeal.',
                'Rajamouli who is the Director of the movie baahubali took 109 days to get the waterfall shot right.',
                'The climax of the Baahubali: The Conclusion has reportedly cost a whopping Rs 30 crore.',
                'The entire franchise of Baahubali took nearly 5 years to be completed.',
                'To honour Prabhas’s hardwork and dedication towards the film baahubali, SS Rjamouli gifted him the armour of Baahubali.',

            ],
            SKILL_NAME: 'Baahubali Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a baahubali fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'Baahubali has entered Guinness Book of World Records by making the largest poster ever of 50,000 sq feet.',
                'Around 800+ Technicians worked on Art, Design and Visual Effects for Baahubali.',
                'Body Building equipment used to train the cast costed 1.5 Crore indian Rupees.',
                'Baahubali took Almost 1 year for Pre-Production work which is highest for any Indian movie till date.',
                'S S Rajamouli,The director of Baahubali has no Single flop in his film career.',
                'Baahubali has touched $800k in USA for premieres through advance booking alone.',     
                'Baahubali is the only film that has been featured on BBC documentary on 100 years of Indian cinema even before its release.',
                'There is one thing common between the movie ‘Jurassic World’ and ‘Bahubali’ , both movies share the same special effects team.',
                'A 100 foot statue of the films antagonist, Rana Daggubati was specially erected at hyderabad which can be seen in the film.',
                'A New language known as “kiliki” was invented for the film by writer Madhan,with around 750 words and new grammar rules.',
                'Baahubali is the most expensive movie ever produced in the Indian subcontinent.',
                'In a few action sequences of Baahubali stunt choreographer Peter Hein had to control more than 2000 men and elephants.',
                'A 20-minute battle scene from the film Baahubali took four months to shoot.',
                'Baahubali has 9.4 IMDB rating, making it the highest rated Indian film ever.',
                'Baahubali will be the first Indian film that will transcend regional boundaries and made in Telugu, Tamil and dubbed in Hindi, Malayalam, English, French and Japanese.',
                'There are 5000 VFX shots used in the Baahubali the Beginning to give it the massive appeal.',
                'Rajamouli who is the Director of the movie baahubali took 109 days to get the waterfall shot right.',
                'The climax of the Baahubali: The Conclusion has reportedly cost a whopping Rs 30 crore.',
                'The entire franchise of Baahubali took nearly 5 years to be completed.',
                'To honour Prabhas’s hardwork and dedication towards the film baahubali, SS Rjamouli gifted him the armour of Baahubali.',
            ],
            SKILL_NAME: 'Baahubali Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a Baahubali fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'de-DE': {
        translation: {
            FACTS: [
                'Baahubali has entered Guinness Book of World Records by making the largest poster ever of 50,000 sq feet.',
                'Around 800+ Technicians worked on Art, Design and Visual Effects for Baahubali.',
                'Body Building equipment used to train the cast costed 1.5 Crore indian Rupees.',
                'Baahubali took Almost 1 year for Pre-Production work which is highest for any Indian movie till date.',
                'S S Rajamouli,The director of Baahubali has no Single flop in his film career.',
                'Baahubali has touched $800k in USA for premieres through advance booking alone.',     
                'Baahubali is the only film that has been featured on BBC documentary on 100 years of Indian cinema even before its release.',
                'There is one thing common between the movie ‘Jurassic World’ and ‘Bahubali’ , both movies share the same special effects team.',
                'A 100 foot statue of the films antagonist, Rana Daggubati was specially erected at hyderabad which can be seen in the film.',
                'A New language known as “kiliki” was invented for the film by writer Madhan,with around 750 words and new grammar rules.',
                'Baahubali is the most expensive movie ever produced in the Indian subcontinent.',
                'In a few action sequences of Baahubali stunt choreographer Peter Hein had to control more than 2000 men and elephants.',
                'A 20-minute battle scene from the film Baahubali took four months to shoot.',
                'Baahubali has 9.4 IMDB rating, making it the highest rated Indian film ever.',
                'Baahubali will be the first Indian film that will transcend regional boundaries and made in Telugu, Tamil and dubbed in Hindi, Malayalam, English, French and Japanese.',
                'There are 5000 VFX shots used in the Baahubali the Beginning to give it the massive appeal.',
                'Rajamouli who is the Director of the movie baahubali took 109 days to get the waterfall shot right.',
                'The climax of the Baahubali: The Conclusion has reportedly cost a whopping Rs 30 crore.',
                'The entire franchise of Baahubali took nearly 5 years to be completed.',
                'To honour Prabhas’s hardwork and dedication towards the film baahubali, SS Rjamouli gifted him the armour of Baahubali.',
            ],
            SKILL_NAME: 'Weltraumwissen auf Deutsch',
            GET_FACT_MESSAGE: 'Hier Baahubali Fakten: ',
            HELP_MESSAGE: '',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit(this.t('GetFact'));
    },
    'GetABaahubaliFact':  function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    
     GetFact : function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
     },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
