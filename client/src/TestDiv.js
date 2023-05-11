import WordOfDayAPI from "./apis/WordOfDayAPI";

function TestDiv() {
    const nextDay = async () => {
        var today = new Date();
        var month = String(today.getMonth() + 1).padStart(2, "0");
        var day = String(today.getDate()).padStart(2, "0");
        var year = today.getFullYear();
        var currentDate = month + "/" + day + "/" + year;
        try {
            const getFirstWODReponse = await WordOfDayAPI.get(`/word-of-day`);
            var wodDate = getFirstWODReponse.data.data.word_of_day[0].date;
        } catch (e) {}
        try {
            if (wodDate < currentDate) {
                try {
                    const response = await WordOfDayAPI.get(
                        "/word-of-day/random"
                    );
                    var randomWordId = response.data.data.words[0].id;
                    console.log("response", randomWordId);
                } catch (err) {}
                try {
                    const getWODReponse = await WordOfDayAPI.get(
                        `/word-of-day`
                    );
                    var wodId = getWODReponse.data.data.word_of_day[0].id;
                } catch (err) {}
                try {
                    const makeWordUsedReponse = await WordOfDayAPI.put(
                        `/words/${randomWordId}/used`
                    );
                    console.log(makeWordUsedReponse);
                } catch (err) {}

                try {
                    const updateWODResposne = await WordOfDayAPI.put(
                        `/word-of-day/${wodId}`,
                        {
                            word_id: randomWordId,
                            date: currentDate,
                        }
                    );
                } catch (err) {}
            } else console.log("Cannot switch days yet");
        } catch (e) {}
    };

    return (
        <div>
            <button onClick={nextDay}>Next Day</button>
        </div>
    );
}
export default TestDiv;
