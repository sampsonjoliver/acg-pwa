export const fragmentTypes = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'ComponentContent',
        possibleTypes: [
          { name: 'VideoContent' },
          { name: 'LabContent' },
          { name: 'QuizContent' },
          { name: 'WhitepaperContent' },
          { name: 'TextContent' },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'UserComponentContent',
        possibleTypes: [
          { name: 'UserVideoContent' },
          { name: 'UserLabContent' },
          { name: 'UserQuizContent' },
          { name: 'UserWhitepaperContent' },
          { name: 'UserTextContent' },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'CondensedUserComponentContent',
        possibleTypes: [
          { name: 'CondensedUserVideoContent' },
          { name: 'CondensedUserLabContent' },
          { name: 'CondensedUserQuizContent' },
          { name: 'CondensedUserWhitepaperContent' },
          { name: 'CondensedUserTextContent' },
        ],
      },
      {
        kind: 'UNION',
        name: 'SubscriptionPaymentMethod',
        possibleTypes: [
          { name: 'CreditCardPaymentMethod' },
          { name: 'PaypalPaymentMethod' },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'CourseComponentContent',
        possibleTypes: [
          { name: 'LabCourseComponentContent' },
          { name: 'QuizCourseComponentContent' },
          { name: 'TextCourseComponentContent' },
          { name: 'VideoCourseComponentContent' },
          { name: 'WhitepaperCourseComponentContent' },
        ],
      },
      {
        kind: 'UNION',
        name: 'CreateContentTagsResult',
        possibleTypes: [
          { name: 'CreateTagResults' },
          { name: 'ContentTagExistedError' },
        ],
      },
      {
        kind: 'UNION',
        name: 'Membership_createSubscription_response',
        possibleTypes: [
          { name: 'Membership_Subscription' },
          { name: 'Membership_ExpectedError' },
        ],
      },
    ],
  },
};
