
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import TransactionFormFields from './TransactionFormFields';

interface TransactionFormProps {
  onSubmit: (transaction: {
    type: 'income' | 'expense';
    amount: number;
    category: string;
    method: 'manual' | 'voice' | 'photo';
    notes: string;
  }) => void;
}

const TransactionForm = ({ onSubmit }: TransactionFormProps) => {
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');
  const [method, setMethod] = useState<'manual' | 'voice' | 'photo'>('manual');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !category) {
      toast({
        title: "Missing fields",
        description: "Please fill in amount and category",
        variant: "destructive"
      });
      return;
    }

    onSubmit({
      type,
      amount: parseFloat(amount),
      category,
      method,
      notes
    });

    // Reset form
    setAmount('');
    setCategory('');
    setNotes('');
    setMethod('manual');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <TransactionFormFields
        type={type}
        amount={amount}
        category={category}
        notes={notes}
        onTypeChange={setType}
        onAmountChange={setAmount}
        onCategoryChange={setCategory}
        onNotesChange={setNotes}
        onMethodChange={setMethod}
      />

      <Button type="submit" className="w-full">
        Add Transaction
      </Button>
    </form>
  );
};

export default TransactionForm;
