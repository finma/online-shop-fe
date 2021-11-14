/* eslint-disable react/jsx-handler-names */
import type { PaymentTypes } from "src/type/types";

interface PaymentItemProps {
  payment: PaymentTypes;
  onChange: () => void;
}

export const PaymentItem = (props: PaymentItemProps) => {
  const { payment, onChange } = props;

  return (
    <label htmlFor={payment.no_rekening} onChange={onChange}>
      <input
        type="radio"
        id={payment.no_rekening}
        value={payment.id}
        name="paymentMethod"
        className="hidden"
        required
      />
      <div className="box-border overflow-hidden relative p-4 w-full rounded-2xl shadow-lg cursor-pointer detail-payment">
        <div className="w-4/6">
          <p className="mb-2 text-lg font-medium text-gray-800">
            {payment.type} | {payment.bank_name}
          </p>
          <p className="text-sm text-gray-400">{payment.name}</p>
          <p className="text-xl font-medium text-indigo-500">{payment.no_rekening}</p>
        </div>
      </div>
    </label>
  );
};
