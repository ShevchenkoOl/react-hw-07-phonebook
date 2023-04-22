import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  margin: 0 auto;
    padding: 40px 0;
    text-align: center;
`;
  
  export const Text = styled.p`
    margin-top: 20px;
    color: red;
    font-weight: 500;
    font-size: 24px;
  `;