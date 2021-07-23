const firebase = require('./firestore');
const db = firebase.firestore();

async function getUrl(slug) {
    const result = await db.collection('url').doc(slug).get();
    return result.data();
}

async function saveUrl(newUrl) {
    await db.collection('url').doc(newUrl.slug).set(newUrl);
}

async function incrementClicked(slug) {
    await db.collection('url').doc(slug).update(
        {
            clicked: firebase.firestore.FieldValue.increment(1)
        }
    );
}

module.exports = {
    getUrl,
    saveUrl,
    incrementClicked
}
