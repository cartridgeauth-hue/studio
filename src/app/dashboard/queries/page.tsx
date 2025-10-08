
'use client';
import { useState } from 'react';
import { DUMMY_QUERIES } from '@/lib/dummy-data';
import type { Query } from '@/lib/definitions';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format, formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Archive, ArchiveX, Inbox, Search, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const problemTypeLabels: { [key in Query['problemType']]: string } = {
  epfo: 'EPFO',
  esic: 'ESIC',
  estamps: 'eStamps',
  notarisation: 'Notarisation',
  'income-tax': 'Income Tax',
  gst: 'GST',
  other: 'Other',
};

const statusColors: { [key in Query['status']]: string } = {
    new: 'bg-red-500',
    read: 'bg-blue-500',
    archived: 'bg-gray-500'
}

export default function QueriesPage() {
  const [queries, setQueries] = useState<Query[]>(DUMMY_QUERIES);
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(queries.find(q => q.status === 'new') || queries[0] || null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQueries = queries
    .filter(q => filter === 'all' || q.status === filter)
    .filter(q =>
      q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime());

    const handleSelectQuery = (query: Query) => {
        setSelectedQuery(query);
        // Mark as read if it's new
        if (query.status === 'new') {
            setQueries(prev => prev.map(q => q.id === query.id ? {...q, status: 'read'} : q));
        }
    }


  return (
    <div className="h-[calc(100vh-10rem)] bg-card border rounded-lg flex">
        <aside className="w-1/3 border-r flex flex-col">
            <div className="p-4 border-b">
                <h1 className="text-2xl font-bold font-headline">Inbox</h1>
                <div className="relative mt-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search mail..." 
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                </div>
            </div>
             <div className="p-2 flex gap-1">
                <Button variant={filter === 'all' ? 'secondary' : 'ghost'} size="sm" className="flex-1" onClick={() => setFilter('all')}>All</Button>
                <Button variant={filter === 'new' ? 'secondary' : 'ghost'} size="sm" className="flex-1" onClick={() => setFilter('new')}>New</Button>
                <Button variant={filter === 'read' ? 'secondary' : 'ghost'} size="sm" className="flex-1" onClick={() => setFilter('read')}>Read</Button>
                <Button variant={filter === 'archived' ? 'secondary' : 'ghost'} size="sm" className="flex-1" onClick={() => setFilter('archived')}>Archived</Button>
            </div>
            <Separator />
            <div className="flex-1 overflow-y-auto">
                <ul className="divide-y">
                   {filteredQueries.map(query => (
                       <li key={query.id} onClick={() => handleSelectQuery(query)} className={`p-4 cursor-pointer hover:bg-muted ${selectedQuery?.id === query.id ? 'bg-muted' : ''}`}>
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{query.name}</h3>
                                <p className="text-xs text-muted-foreground">{formatDistanceToNow(new Date(query.receivedAt), { addSuffix: true })}</p>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{query.description}</p>
                             <div className='flex items-center gap-2 mt-2'>
                                {query.status === 'new' && <span className='w-2 h-2 rounded-full bg-accent' />}
                                <Badge variant="outline">{problemTypeLabels[query.problemType]}</Badge>
                            </div>
                       </li>
                   ))}
                </ul>
            </div>
        </aside>
        <main className="w-2/3 flex flex-col min-w-0">
            {selectedQuery ? (
                <>
                <div className="p-4 border-b flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold truncate">{selectedQuery.name}</h2>
                        <a href={`mailto:${selectedQuery.email}`} className="text-sm text-muted-foreground hover:text-accent truncate">{selectedQuery.email}</a>
                    </div>
                     <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon"><Archive className="w-5 h-5"/></Button>
                        <Button variant="ghost" size="icon" className="text-destructive"><ArchiveX className="w-5 h-5"/></Button>
                        <Separator orientation="vertical" className="h-6" />
                        <Button variant="ghost" size="icon"><Send className="w-5 h-5"/></Button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="flex items-baseline gap-4">
                        <Badge>{problemTypeLabels[selectedQuery.problemType]}</Badge>
                        <p className="text-sm text-muted-foreground">
                            Received on {format(new Date(selectedQuery.receivedAt), 'MMMM d, yyyy HH:mm')}
                        </p>
                    </div>
                    <p className="text-base whitespace-pre-wrap leading-relaxed">{selectedQuery.description}</p>
                </div>
                </>
            ) : (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                        <Inbox className="w-16 h-16 mx-auto mb-4"/>
                        <p>Select a query to read</p>
                    </div>
                </div>
            )}
        </main>
    </div>
  );
}
