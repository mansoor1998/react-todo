export function runAction(action, payload) {
    return {
        type: action,
        payload: payload
    }
}