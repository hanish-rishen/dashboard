import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from './ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"

import { Input } from "@/components/ui/input"

interface MyCardProps {
  onUpdate: (rank: string, percentile: string, score: string) => void;
}

const MyCard: React.FC<MyCardProps> = ({ onUpdate }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rank, setRank] = useState('');
  const [percentile, setPercentile] = useState('');
  const [score, setScore] = useState('');
  const [rankError, setRankError] = useState<string | null>(null);
  const [percentileError, setPercentileError] = useState<string | null>(null);
  const [scoreError, setScoreError] = useState<string | null>(null);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    // Reset errors on dialog close
    setRankError(null);
    setPercentileError(null);
    setScoreError(null);
  };

  const handleRankChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRank(value);
    if (!isNaN(value as any)) {
      setRankError(null); // Clear previous error
    } else {
      setRankError('Rank must be a number.');
    }
  };

  const handlePercentileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPercentile(value);
    if (!isNaN(value as any) && parseInt(value) >= 0 && parseInt(value) <= 100) {
      setPercentileError(null); // Clear previous error
    } else {
      setPercentileError('Percentile must be a number between 0 and 100.');
    }
  };

  const handleScoreChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setScore(value);
    if (!isNaN(value as any) && parseInt(value) >= 0 && parseInt(value) <= 15) {
      setScoreError(null); // Clear previous error
    } else {
      setScoreError('Score must be a number between 0 and 15.');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validate inputs before updating
    if (!rank || isNaN(rank as any)) {
      setRankError('Please enter a valid rank.');
      return;
    }
    
    if (!percentile || isNaN(percentile as any) || parseInt(percentile) < 0 || parseInt(percentile) > 100) {
      setPercentileError('Please enter a valid percentile between 0 and 100.');
      return;
    }
    
    if (!score || isNaN(score as any) || parseInt(score) < 0 || parseInt(score) > 15) {
      setScoreError('Please enter a valid score between 0 and 15.');
      return;
    }
    
    // Call onUpdate function with current values
    onUpdate(rank, percentile, score);
    // Close the dialog after saving
    closeDialog();
  };

  return (
    <>
      <Card className='w-full'>
        <CardHeader>
          <img
            src="/images/html5.svg"
            alt="HTML5 Logo"
            style={{ width: '70px', height: '70px', objectFit: 'cover' }}
          />
          <CardTitle className='pt-2'>Hyper Text Markup Language</CardTitle>
          <CardDescription className='text-lg pt-2'>
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </CardDescription>
        </CardHeader>
        <CardFooter>
        <Button
    variant="outline"
    className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white text-lg px-6 py-6"
    onClick={() => setIsDialogOpen(true)}
  >
    Update
  </Button>
          <Dialog open={isDialogOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Update</DialogTitle>
                <DialogDescription>
                  Make changes to your Statistics here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="py-4">
                  <div className="mb-4">
                    <Label htmlFor="rank" className="text-left block mb-2">
                      Rank
                    </Label>
                    <Input
                      id="rank"
                      placeholder="Your Rank"
                      className="w-full"
                      value={rank}
                      onChange={handleRankChange}
                    />
                    {rankError && <p className="text-red-500 text-sm mt-2">{rankError}</p>}
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="percentile" className="text-left block mb-2">
                      Percentile
                    </Label>
                    <Input
                      id="percentile"
                      placeholder="Your Percentile"
                      className="w-full"
                      value={percentile}
                      onChange={handlePercentileChange}
                    />
                    {percentileError && <p className="text-red-500 text-sm mt-2">{percentileError}</p>}
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="score" className="text-left block mb-2">
                      Score
                    </Label>
                    <Input
                      id="score"
                      placeholder="Your Current Score"
                      className="w-full"
                      value={score}
                      onChange={handleScoreChange}
                    />
                    {scoreError && <p className="text-red-500 text-sm mt-2">{scoreError}</p>}
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={closeDialog}>Close</Button>
                  <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white">Save changes</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
}

export default MyCard;
