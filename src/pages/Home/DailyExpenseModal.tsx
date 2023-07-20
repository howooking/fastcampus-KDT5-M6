import { Modal } from 'antd';
import DailyExpenseTable from './DailyExpenseTable';
import { DailyExpensesType } from '@/types/expenses';

//Home index에서 받아오는 props 데이터 type interface
interface DailyExpenseModalProps {
  month: string;
  day: string;
  dailyExpenses: DailyExpensesType[];
  dailyExpenseModalOpen: boolean;
  setDailyExpenseModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleFetch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DailyExpenseModal({
  // Home index에서 받아오는 데이터 목록
  dailyExpenses,
  month,
  day,
  dailyExpenseModalOpen,
  setDailyExpenseModalOpen,
  setToggleFetch,
}: DailyExpenseModalProps) {
  return (
    <Modal
      // 일별 소비 목록 모달창
      title={`${month}월 ${day}일`}
      centered
      open={dailyExpenseModalOpen} // dailyExpenseModalOpen가 true 일때 모달창 열림
      onCancel={() => setDailyExpenseModalOpen(false)} // dailyExpenseModalOpen가 flase 일때 모달창 닫힘
      footer={null}
    >
      <DailyExpenseTable
        // DailyExpenseTable 전달할 props
        dailyExpenses={dailyExpenses}
        setToggleFetch={setToggleFetch}
      />
    </Modal>
  );
}
