
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import VoiceInput from './VoiceInput';
import PhotoInput from './PhotoInput';

interface TransactionFormFieldsProps {
  type: 'income' | 'expense';
  amount: string;
  category: string;
  notes: string;
  onTypeChange: (type: 'income' | 'expense') => void;
  onAmountChange: (amount: string) => void;
  onCategoryChange: (category: string) => void;
  onNotesChange: (notes: string) => void;
  onMethodChange: (method: 'manual' | 'voice' | 'photo') => void;
}

const TransactionFormFields = ({
  type,
  amount,
  category,
  notes,
  onTypeChange,
  onAmountChange,
  onCategoryChange,
  onNotesChange,
  onMethodChange
}: TransactionFormFieldsProps) => {
  const categories = {
    income: ['Sales', 'Services', 'Investment', 'Other Income'],
    expense: ['Inventory', 'Transportation', 'Marketing', 'Utilities', 'Food', 'Other Expense']
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Type</label>
          <Select value={type} onValueChange={(value: 'income' | 'expense') => onTypeChange(value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">Income 💰</SelectItem>
              <SelectItem value="expense">Expense 💸</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Amount ($)</label>
          <Input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            placeholder="0.00"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories[type].map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Notes</label>
        <Textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="Add notes about this transaction..."
          rows={3}
        />
        
        <div className="flex gap-2 mt-2">
          <VoiceInput
            onTranscript={onNotesChange}
            onMethodChange={onMethodChange}
          />
          
          <PhotoInput
            onTextExtracted={onNotesChange}
            onMethodChange={onMethodChange}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionFormFields;
