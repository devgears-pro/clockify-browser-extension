const webSocketEventsEnums = {
    TIME_ENTRY_STARTED: 'TIME_ENTRY_STARTED',
    TIME_ENTRY_STOPPED: 'TIME_ENTRY_STOPPED',
    TIME_ENTRY_DELETED: 'TIME_ENTRY_DELETED',
    TIME_ENTRY_UPDATED: 'TIME_ENTRY_UPDATED',
    TIME_ENTRY_CREATED: 'TIME_ENTRY_CREATED',
    NEW_NOTIFICATIONS: 'NEW_NOTIFICATIONS',
    TIME_TRACKING_SETTINGS_UPDATED: 'TIME_TRACKING_SETTINGS_UPDATED',
    WORKSPACE_SETTINGS_UPDATED: 'WORKSPACE_SETTINGS_UPDATED',
    ACTIVE_WORKSPACE_CHANGED: 'ACTIVE_WORKSPACE_CHANGED',
    CHANGED_ADMIN_PERMISSION: 'CHANGED_ADMIN_PERMISSION'
};
Object.freeze(webSocketEventsEnums);

export function getWebSocketEventsEnums() {
    return webSocketEventsEnums;
}