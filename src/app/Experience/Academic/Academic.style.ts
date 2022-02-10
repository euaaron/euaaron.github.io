import styled from 'styled-components';

export const AcademicContainer = styled.section`
  display: flex;
  flex-direction: column;  
  align-items: center;
  gap: 4rem;
  
  padding: 4rem 1rem;
  height: calc(100% - 3.5rem);
  width: 100%;

  > header {    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  > ul {    
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 1rem;
    
    list-style: none;
    
    > li {
      flex: 1;
      width: 32rem;
      height: 16rem;
    }
  }
`;
