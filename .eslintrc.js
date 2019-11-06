module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  rules: {
    indent: 0,
    'no-tabs': 0,
    'eol-last': ['error', 'always'],
    'no-underscore-dangle': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
