import styled, { keyframes } from 'styled-components';
import { Form, Field} from 'formik';


export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top left, #1d4ed8 0, #020617 50%, #020617 100%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

export const Layout = styled.div`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 1fr;
    gap: 2.5rem;
    align-items: stretch;
  }
`;

/* البانل اللي على الشمال في الشاشات الكبيرة */
export const SidePanel = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.1rem 2.4rem;
    border-radius: 1.5rem;
    background: radial-gradient(circle at top left, #2563eb, #1f2937);
    color: #e5e7eb;
    box-shadow: 0 26px 60px rgba(15, 23, 42, 0.75);
  }
`;

export const SideTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0.75rem;
`;

export const SideText = styled.p`
  font-size: 0.9rem;
  color: #e5e7eb;
  max-width: 22rem;
`;

export const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const StatCard = styled.div`
  flex: 1;
  border-radius: 1rem;
  padding: 0.75rem 0.9rem;
  background: rgba(15, 23, 42, 0.4);
  font-size: 0.8rem;
`;

export const StatLabel = styled.div`
  color: #9ca3af;
  margin-bottom: 0.2rem;
`;

export const StatValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Card = styled.div`
  width: 100%;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(18px);
  border-radius: 1.25rem;
  padding: 2rem 1.75rem;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.7);
  color: #e5e7eb;
  animation: ${fadeIn} 0.45s ease-out;

  @media (min-width: 640px) {
    padding: 2.4rem 2.25rem;
  }

  @media (min-width: 1024px) {
    padding: 2.6rem 2.4rem;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.15rem 0.65rem;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.1);
  color: #93c5fd;
  font-size: 0.7rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.25);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 0.25rem;

  @media (min-width: 640px) {
    font-size: 1.7rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.85rem;
  color: #9ca3af;
  margin-bottom: 1.8rem;

  @media (min-width: 640px) {
    font-size: 0.9rem;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: #e5e7eb;
`;

export const HelperText = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

export const StyledField = styled(Field)`
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid rgba(55, 65, 81, 0.9);
  background: rgba(15, 23, 42, 0.8);
  padding: 0.65rem 0.85rem;
  font-size: 0.85rem;
  color: #e5e7eb;
  outline: none;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.7);
    background: rgba(15, 23, 42, 1);
  }

  &::placeholder {
    color: #6b7280;
  }
`;

export const ErrorText = styled.div`
  font-size: 0.75rem;
  color: #fca5a5;
`;

export const GlobalError = styled.div`
  font-size: 0.8rem;
  color: #fecaca;
  background: rgba(153, 27, 27, 0.15);
  border: 1px solid rgba(248, 113, 113, 0.4);
  padding: 0.65rem 0.75rem;
  border-radius: 0.75rem;
`;

export const SubmitButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  margin-top: 0.3rem;
  border: none;
  border-radius: 0.9rem;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #f9fafb;
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: transform 0.1s ease, box-shadow 0.1s ease, filter 0.1s ease, opacity 0.1s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.45);
    filter: brightness(1.02);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
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

export const ButtonSpinner = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  border: 2px solid rgba(239, 246, 255, 0.6);
  border-top-color: transparent;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const FooterHint = styled.p`
  margin-top: 1.2rem;
  font-size: 0.78rem;
  color: #6b7280;

  span {
    color: #9ca3af;
    font-weight: 500;
  }
`;
