import styled from 'styled-components';
import badge from '../../../Images/png/Frame 756.png';

const GoalFolderSection = styled.section`
  display: flex;
`;
const GoalRadios = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const GoalRadio = styled.div`
  width: 100%;
  height: 68px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #00b87c;
`;

const GoalDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const ReportFormat = () => {
  return (
    <GoalFolderSection>
      <img style={{ width: '50px', height: '50px' }} src={badge} alt="" />

      <GoalDetails>
        <h3 style={{ fontFamily: 'Lato', fontWeight: 500, fontSize: '21px', lineHeight: '25.2px' }}>Report Format</h3>
        <p
          style={{
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '14.4px',
            marginTop: '17px',
            color: '#999999',
            marginBottom: '20px',
          }}
        >
          Select the format to export report
        </p>
        <GoalRadios>
          <GoalRadio>
            <input type="radio" />
            <p
              style={{
                color: '#00b87c',
                fontFamily: 'Lato',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19.2px',
                marginTop: '16px',
              }}
            >
              PDF
            </p>
          </GoalRadio>

          <GoalRadio>
            <input type="radio" />
            <p
              style={{
                color: '#00b87c',
                fontFamily: 'Lato',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19.2px',
                marginTop: '16px',
              }}
            >
              SpreadSheet
            </p>
          </GoalRadio>
        </GoalRadios>
      </GoalDetails>
    </GoalFolderSection>
  );
};

export default ReportFormat;
