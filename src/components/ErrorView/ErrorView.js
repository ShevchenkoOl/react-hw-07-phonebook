import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { Text, Wrapper } from './ErrorView.styled';

function ErrorView({ message }) {
  return (
    <AnimatePresence>
      <Wrapper
        role="alert"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <Text text={message}>
          {message}
        </Text>
      </Wrapper>
    </AnimatePresence>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorView;