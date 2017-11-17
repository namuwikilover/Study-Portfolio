import { put, takeEvery } from "redux-saga/effects/";
import { getFirebase } from "react-redux-firebase";

function* fetchData () {
    try {
        const data = yield getFirebase()
            .database()
            .ref("posts")
            .limitToLast(10)
            .once("value")
            .then(res => {
                return res.val();
            });

        yield put({ type: "fetch/fetch_Success", payload: data });

    } catch (error) {
        yield put({ type: "fetch/fetch_Failure", payload: error })
    }
};

export function* watchFetchData () {
    yield takeEvery("fetch/fetch_Request", fetchData);
}

export default function* rootSaga () {
    yield watchFetchData()
}

