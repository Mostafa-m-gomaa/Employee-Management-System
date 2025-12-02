import styled from 'styled-components';


export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 1.5rem 1rem 2rem;
  background: radial-gradient(circle at top left, #1d4ed8 0, #020617 50%, #020617 100%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #e5e7eb;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.4rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.8rem;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.02em;

  @media (min-width: 640px) {
    font-size: 1.7rem;
  }
`;



export const Actions = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 640px) {
    justify-content: flex-end;
  }
`;

export const AddButton = styled.button<{ disabled?: boolean }>`
  border: none;
  border-radius: 0.9rem;
  padding: 0.6rem 1.1rem;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #f9fafb;
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.45);
  transition: transform 0.1s ease, box-shadow 0.1s ease, filter 0.1s ease, opacity 0.1s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 32px rgba(37, 99, 235, 0.55);
    filter: brightness(1.03);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.45);
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  `}
`;
export const LogOutBtn = styled.button`
  border: none;
  border-radius: 0.9rem;
  padding: 0.6rem 1.1rem;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #f9fafb;
  background: red;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.45);
  transition: transform 0.1s ease, box-shadow 0.1s ease, filter 0.1s ease, opacity 0.1s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 32px rgba(37, 99, 235, 0.55);
    filter: brightness(1.03);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.45);
  }


`;

export const AddIcon = styled.span`
  font-size: 1rem;
  line-height: 1;
`;

export const Card = styled.div`
  border-radius: 1.1rem;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(18px);
  padding: 1rem;
  box-shadow: 0 22px 50px rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.12);
  overflow: hidden;

  @media (min-width: 640px) {
    padding: 1.25rem 1.35rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem 1.75rem;
  }
`;

// لو حابب تخلي الصفحة قابلة للسكرول لو التابل طويل
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 0.3rem;

  /* شوية تحسين بسيط للـ scrollbar في المتصفحات اللي بتدعمه */
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.7);
  }
`;
