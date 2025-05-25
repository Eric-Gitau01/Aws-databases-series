
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useToast } from '@/hooks/use-toast';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import StatsCards from '@/components/StatsCards';
import { LogOut } from 'lucide-react';

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  method: 'manual' | 'voice' | 'photo';
  notes: string;
  date: string;
}

const Dashboard = () => {
  const [user, setUser] = useLocalStorage('veetracker-user', null);
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>('veetracker-transactions', []);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleLogout = () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "Come back soon!"
    });
  };

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'date'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
    setShowForm(false);
    
    toast({
      title: "Transaction added",
      description: `${transaction.type === 'income' ? 'Income' : 'Expense'} of $${transaction.amount} recorded`
    });
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">VeeTracker</h1>
              <p className="text-gray-600">Welcome, {user.name} 👋</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Stats Cards */}
          <StatsCards transactions={transactions} />

          {/* Add Transaction Button */}
          <div className="flex justify-center">
            <Button 
              onClick={() => setShowForm(!showForm)}
              size="lg"
              className="px-8 py-3 text-lg"
            >
              {showForm ? 'Cancel' : 'Add Transaction'}
            </Button>
          </div>

          {/* Transaction Form */}
          {showForm && (
            <Card>
              <CardHeader>
                <CardTitle>Add New Transaction</CardTitle>
                <CardDescription>
                  Record your income or expense using manual entry, voice, or photo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TransactionForm onSubmit={addTransaction} />
              </CardContent>
            </Card>
          )}

          {/* Transaction List */}
          <TransactionList 
            transactions={transactions} 
            setTransactions={setTransactions}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
