import styled from 'styled-components';
import Modal from 'shared/components/modal/modal';

export const SettingsContainer = styled(Modal)`
  color: #06171f
`;

export const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SettingsBox = styled.div`
  border: 1px solid #e0e0e0;
  margin-bottom: 5px;
  border-radius: 4px;
  `;

export const SettingsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  text-transform: capitalize;
  &:nth-child(even){
    background-color: #e0e0e0;
  }
`;

export const SettingsDivider = styled.div`
  padding-top: 10px;
  margin-bottom: 10px;
`;

export const SettingsInput = styled.div`
  width: 100%;
  max-width: 60%;
`;

export const SettingsFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const SettingsFooterItem = styled.div`
  &:not(:last-child){
    margin-right: 10px
  }
`;