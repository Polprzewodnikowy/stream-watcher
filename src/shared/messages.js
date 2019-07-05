const messages = {
  en: {
    app: {
      title: 'Stream Watcher',
    },
    actions: {
      tooltips: {
        login: 'Login',
        logout: 'Logout',
        showChat: 'Show chat',
        hideChat: 'Hide chat',
        closeStream: 'Close stream',
      },
    },
    errors: {
      closeModal: 'Close',
      fetchErrorType: 'Network error',
      fetchErrorMessage: (message, url) => `Error "${message}" occured while loading "${url}". Please check your internet connection. Try refreshing the page.`,
      unknownErrorType: 'Unknown Error',
      unknownErrorMessage: 'Try refreshing the page',
    },
    twitch: {
      error: 'Twitch error',
    },
  },
};

export default messages;
